## Web资源分类
1. 静态资源(html,css,js,图片，视频)
2. 动态资源(jsp页面,servlet程序)

## 常用Web服务器
1. Tomcat 是Apache提供的免费开源Web服务器，提供了对jsp与servlet支持
2. JBoss 是遵从JavaEE规范和开放源码，是纯Java的EJB服务器（免费)
3. Resin是Java开发，性能优良，支持jsp与servlet(收费)

## servlet
1. servlet程序2.5版本使用最多（xml配置)
2. servlet3.0以后是使用注解

## tomcat目录结构
1. bin tomcat可执行文件
2. conf 用配置tomcat的文件
3. lib 存放tomcat服务器的 jar
4. logs tomcat运行时输出的日志
5. temp 存放运行时临时产生的数据
6. webapps 存放部署的Web 工程
7. work 是tomcat工作时的目录，用来存放tomcat运行时jsp翻译为Servlet的源码,和Session序列化的目录

## Tomcat运行常见问题
1. 执行/bin/startup.bat 运行终端就关了
没有配置JAVA_HOME环境变量
```
//JAVA_HOM配置注意
(1)JAVA_HOME必须大小和使用下划线
(2)配置路径至安装目录就行（不需要到bin)
```

2. 修改默认端口8080
进入conf修改server.conf
```
找到Connector标签中port属性修改
```

3.部署Web工程
1. 进入conf\Catalina\localhost\目录下
2. 新建xml文件
3. 文件内容
```
(1)Context工程上下文
(2)path表示工程url访问路径
(3)docBase表示工程目录在哪里
<Context path="/a" docBase="./src"/>
```

## tomcat 中webapps 中的ROOT
没有工程名时默认访问ROOT目录下的index.html

## InteliJ IDEA配置tomcat
Setting => Build,Execution => Application Server =>新增tomcat相应目录


## Servlet
1. 是JavaEE规范接口
2. Java Web三大组件之一：Servlet程序，Filter过滤器，Listener监听器
3. 运行在服务器上Java小程序，接收请求，发送响应

## java内省
```
在类UserInfo中有属性 userName, 那我们可以通过 getUserName,setUserName来得到其值或者设置新的值。
通过 getUserName/setUserName来访问 userName属性，这就是默认的规则。 
Java JDK中提供了一套 API 用来访问某个属性的 getter/setter 方法，这就是内省。

PropertyDescriptor类表示JavaBean类通过存储器导出一个属性。主要方法：
    　　1. getPropertyType()，获得属性的Class对象;
    　　2. getReadMethod()，获得用于读取属性值的方法；getWriteMethod()，获得用于写入属性值的方法;
    　　3. hashCode()，获取对象的哈希值;
    　　4. setReadMethod(Method readMethod)，设置用于读取属性值的方法;
    　　5. setWriteMethod(Method writeMethod)，设置用于写入属性值的方法。
```