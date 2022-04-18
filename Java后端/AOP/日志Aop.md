## Aop 概念
面向切面编程是一种编程范式，它作为 OOP 面向对象编程的一种补充，用于处理系统中分布于各个模块的横切关注点，比如事务管理、权限控制、缓存控制、日志打印等等。

###  AOP 把软件的功能模块分为两个部分：
- 核心关注点
- 横切关注点


### 使用切面有以下好处：

- 集中处理某一关注点/横切逻辑

- 可以很方便的添加/删除关注点

- 侵入性少，增强代码可读性及可维护性


### 基本注解
- @Aspect => 声明该类为一个注解类
- 切点注解：@Pointcut => 定义一个切点，可以简化代码
- 通知注解：
```
@Before => 在切点之前执行代码

@After => 在切点之后执行代码

@AfterReturning => 切点返回内容后执行代码，可以对切点的返回值进行封装

@AfterThrowing => 切点抛出异常后执行

@Around => 环绕，在切点前后执行代码
```

### 示例（日志）

1. 使用 @Pointcut 定义切点：
```java
@Pointcut("execution(* your_package.controller..*(..))")
	public void requestServer() {
}
```
- @Pointcut定义了一个切点，因为是请求日志切边，因此切点定义的是**Controller包下的所有类**下的方法。
- 定义切点以后在**通知注解**中直接使用requestServer

2. 使用@Before再切点前执行
```java
@Before("requestServer()")
public void doBefore(JoinPoint joinPoint) {
    ServletRequestAttributes attributes = (ServletRequestAttributes) 
RequestContextHolder.getRequestAttributes();
    HttpServletRequest request = attributes.getRequest();

    LOGGER.info("===============================Start========================");
    LOGGER.info("IP                 : {}", request.getRemoteAddr());
    LOGGER.info("URL                : {}", request.getRequestURL().toString());
    LOGGER.info("HTTP Method        : {}", request.getMethod());
    LOGGER.info("Class Method       : {}.{}", joinPoint.getSignature().getDeclaringTypeName(), joinPoint.getSignature().getName());
}

```

3. 使用@Around打印进入控制层的入参
```java
@Around("requestServer()")
public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
    long start = System.currentTimeMillis();
    Object result = proceedingJoinPoint.proceed();
	// 入参
    LOGGER.info("Request Params       : {}", getRequestParams(proceedingJoinPoint));
    LOGGER.info("Result               : {}", result);
	// 耗时
    LOGGER.info("Time Cost            : {} ms", System.currentTimeMillis() - start);

    return result;
}


private Map<String, Object> getRequestParams(ProceedingJoinPoint proceedingJoinPoint) {
     Map<String, Object> requestParams = new HashMap<>();

      //参数名
     String[] paramNames = ((MethodSignature)proceedingJoinPoint.getSignature()).getParameterNames();
     //参数值
     Object[] paramValues = proceedingJoinPoint.getArgs();

     for (int i = 0; i < paramNames.length; i++) {
         Object value = paramValues[i];

         //如果是文件对象
         if (value instanceof MultipartFile) {
             MultipartFile file = (MultipartFile) value;
             value = file.getOriginalFilename();  //获取文件名
         }

         requestParams.put(paramNames[i], value);
     }

     return requestParams;
 }
 
 注意： 通过 @PathVariable以及@RequestParam注解传递的参数无法打印出参数名，因此需要手动拼接一下参数名，同时对文件对象进行了特殊处理，只需获取文件名即可

```

4. @After方法调用后执行
```
@After("requestServer()")
public void doAfter(JoinPoint joinPoint) {
    LOGGER.info("===============================End========================");
}

```
5. 解决日志串行的问题只要将多行打印信息合并为一行就可以了，因此构造一个对象
6. 可以根据traceId跟踪整条调用链，以log4j2为例介绍如何加入traceId
7. if (value instanceof MultipartFile) 这种流处理方式？ 但是如果参数碰到List files 呢？
```java
@Component
@Aspect
public class RequestLogAspect {
    private final static Logger LOGGER = LoggerFactory.getLogger(RequestLogAspect.class);

    @Pointcut("execution(* com.hikvision.trainplatform.controller..*(..))")
    public void requestServer() {
    }

    @Around("requestServer()")
    public Object doAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        Object result = proceedingJoinPoint.proceed();
        RequestInfo requestInfo = new RequestInfo();
        requestInfo.setIp(request.getRemoteAddr());
        requestInfo.setUrl(request.getRequestURL().toString());
        requestInfo.setHttpMethod(request.getMethod());
        requestInfo.setClassMethod(String.format("%s.%s", proceedingJoinPoint.getSignature().getDeclaringTypeName(),
                proceedingJoinPoint.getSignature().getName()));
        requestInfo.setRequestParams(getRequestParamsByProceedingJoinPoint(proceedingJoinPoint));
        requestInfo.setResult(result);
        requestInfo.setTimeCost(System.currentTimeMillis() - start);
        LOGGER.info("Request Info      : {}", JSON.toJSONString(requestInfo));

        return result;
    }


    @AfterThrowing(pointcut = "requestServer()", throwing = "e")
    public void doAfterThrow(JoinPoint joinPoint, RuntimeException e) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        RequestErrorInfo requestErrorInfo = new RequestErrorInfo();
        requestErrorInfo.setIp(request.getRemoteAddr());
        requestErrorInfo.setUrl(request.getRequestURL().toString());
        requestErrorInfo.setHttpMethod(request.getMethod());
        requestErrorInfo.setClassMethod(String.format("%s.%s", joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName()));
        requestErrorInfo.setRequestParams(getRequestParamsByJoinPoint(joinPoint));
        requestErrorInfo.setException(e);
        LOGGER.info("Error Request Info      : {}", JSON.toJSONString(requestErrorInfo));
    }

    /**
     * 获取入参
     * @param proceedingJoinPoint
     *
     * @return
     * */
    private Map<String, Object> getRequestParamsByProceedingJoinPoint(ProceedingJoinPoint proceedingJoinPoint) {
        //参数名
        String[] paramNames = ((MethodSignature)proceedingJoinPoint.getSignature()).getParameterNames();
        //参数值
        Object[] paramValues = proceedingJoinPoint.getArgs();

        return buildRequestParam(paramNames, paramValues);
    }

    private Map<String, Object> getRequestParamsByJoinPoint(JoinPoint joinPoint) {
        //参数名
        String[] paramNames = ((MethodSignature)joinPoint.getSignature()).getParameterNames();
        //参数值
        Object[] paramValues = joinPoint.getArgs();

        return buildRequestParam(paramNames, paramValues);
    }

    private Map<String, Object> buildRequestParam(String[] paramNames, Object[] paramValues) {
        Map<String, Object> requestParams = new HashMap<>();
        for (int i = 0; i < paramNames.length; i++) {
            Object value = paramValues[i];

            //如果是文件对象
            if (value instanceof MultipartFile) {
                MultipartFile file = (MultipartFile) value;
                value = file.getOriginalFilename();  //获取文件名
            }

            //如果是批量文件上传
            if (value instanceof List) {
                System.out.println("Yes...");
                try {
                    List<MultipartFile> multipartFiles = castList(value, MultipartFile.class);
                    if (multipartFiles!= null) {
                        List<String> fileNames = new ArrayList<>();
                        for (MultipartFile file : multipartFiles) {
                            fileNames.add(file.getOriginalFilename());
                        }

                        requestParams.put(paramNames[i], fileNames);
                        break;
                    }
                } catch (ClassCastException e) {
                    //忽略不是文件类型的List
                }
            }

            requestParams.put(paramNames[i], value);
        }

        return requestParams;
    }
    public static <T> List<T> castList(Object obj, Class<T> clazz) {
        List<T> result = new ArrayList<T>();
        if (obj instanceof List<?>) {
            for (Object o : (List<?>) obj) {
                result.add(clazz.cast(o));
            }
            return result;
        }
        return null;
    }
    
    @Data
    public class RequestInfo {
        private String ip;
        private String url;
        private String httpMethod;
        private String classMethod;
        private Object requestParams;
        private Object result;
        private Long timeCost;
    }

    @Data
    public class RequestErrorInfo {
        private String ip;
        private String url;
        private String httpMethod;
        private String classMethod;
        private Object requestParams;
        private RuntimeException exception;
    }
}


```
生产环境下，不能使用，如下建议
```
1. 明确日志的作用，审计排查问题，AOP 提供的维度有限 ，不包含线程等额外信息 ，大部分记录报文并未实际意义，
2. 日志打点，这个有很多文章讲 怎么更科学系的打点 。
3. 日志收集处理，目前log 通过logstash 挂到es 非常简单
4. 如不会es 或者kibana 展示统计，可以选择 日志易、还有七牛也有类似的产品 GB级别日志 价格算起来 比自建ES 要便宜很多
```