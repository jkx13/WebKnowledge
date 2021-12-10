## java注解

### 注解原理
注解本质是一个**继承了Annotation 的特殊接口**，其具体实现类是Java 运行时生成的**动态代理类**。而我们通过**反射获取注解**时，返回的是Java 运行时生成的**动态代理对象**$Proxy1。

通过代理对象调用**自定义注解（接口）的方法**，会最终调用AnnotationInvocationHandler 的**invoke 方法**。该方法会从memberValues 这个Map 中索引出对应的值。而memberValues 的来源是**Java 常量池**。


### 注解用处
- 1、生成文档。这是最常见的，也是java 最早提供的注解。常用的有@param @return 等
- 2、跟踪代码依赖性，实现替代配置文件功能。比如Dagger 2 依赖注入，未来java 开发，将大量注解配置，具有很大用处;
- 3、在编译时进行格式检查。如@override 放在方法前，如果你这个方法并不是覆盖了超类方法，则编译时就能检查出。

### 元注解
java.lang.annotation 提供了四种元注解，专门注解其他的注解（在自定义注解的时候，需要使用到元注解）：
   - @Documented – 注解是否将包含在JavaDoc中
   -  @Retention – 什么时候使用该注解
   - @Target – 注解用于什么地方
   - @Inherited – 是否允许子类继承该注解

### 1.）@Retention – 定义该注解的生命周期
  - RetentionPolicy.SOURCE : 在编译阶段丢弃。这些注解在编译结束之后就不再有任何意义，所以它们不会写入字节码。@Override, @SuppressWarnings都属于这类注解。
  - RetentionPolicy.CLASS : 在类加载的时候丢弃。在字节码文件的处理中有用。注解默认使用这种方式
  - RetentionPolicy.RUNTIME : 始终不会丢弃，运行期也保留该注解，因此可以使用反射机制读取该注解的信息。我们自定义的注解通常使用这种方式。

### 2.）Target – 表示该注解用于什么地方。默认值为任何元素，表示该注解用于什么地方。可用的ElementType 参数包括
- ElementType.CONSTRUCTOR: 用于描述构造器
- ElementType.FIELD: 成员变量、对象、属性（包括enum实例）
- ElementType.LOCAL_VARIABLE: 用于描述局部变量
- ElementType.METHOD: 用于描述方法
- ElementType.PACKAGE: 用于描述包
- ElementType.PARAMETER: 用于描述参数
- ElementType.TYPE: 用于描述类、接口(包括注解类型) 或enum声明

### 3.)@Documented – 一个简单的Annotations 标记注解，表示是否将注解信息添加在java 文档中。

### 4.)@Inherited – 定义该注释和子类的关系
@Inherited 元注解是一个标记注解，@Inherited 阐述了某个被标注的类型是被继承的。如果一个使用了@Inherited 修饰的annotation 类型被用于一个class，则这个annotation 将被用于该class 的子类。

## 自定义注解
自定义注解类编写的一些规则:
  1. Annotation 型定义为@interface, 所有的Annotation 会自动继承java.lang.Annotation这一接口,并且不能再去继承别的类或是接口.
  2. 参数成员只能用public 或默认(default) 这两个访问权修饰
  3. 参数成员只能用基本类型byte、short、char、int、long、float、double、boolean八种基本数据类型和String、Enum、Class、annotations等数据类型，以及这一些类型的数组.
  4. 要获取类方法和字段的注解信息，必须通过Java的反射技术来获取 Annotation 对象，因为你除此之外没有别的获取注解对象的方法
  5. 注解也可以没有定义成员,，不过这样注解就没啥用了

PS:自定义注解需要使用到元注解

## 自定义注解实例
FruitName.java
```java
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 * 水果名称注解
 */
@Target(FIELD)
@Retention(RUNTIME)
@Documented
public @interface FruitName {
    String value() default "";
}
```

FruitColor.java
```java
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 * 水果颜色注解
 */
@Target(FIELD)
@Retention(RUNTIME)
@Documented
public @interface FruitColor {
    /**
     * 颜色枚举
     */
    public enum Color{ BLUE,RED,GREEN};

    /**
     * 颜色属性
     */
    Color fruitColor() default Color.GREEN;

}
```

FruitProvider.java
```java
import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;
import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;


/**
 * 水果供应者注解
 */
@Target(FIELD)
@Retention(RUNTIME)
@Documented
public @interface FruitProvider {
    /**
     * 供应商编号
     */
    public int id() default -1;

    /**
     * 供应商名称
     */
    public String name() default "";

    /**
     * 供应商地址
     */
    public String address() default "";
}
```

FruitInfoUtil.java
```java
import java.lang.reflect.Field;

/**
 * 注解处理器
 */
public class FruitInfoUtil {
    public static void getFruitInfo(Class<?> clazz){

        String strFruitName=" 水果名称：";
        String strFruitColor=" 水果颜色：";
        String strFruitProvicer="供应商信息：";

        Field[] fields = clazz.getDeclaredFields();

        for(Field field :fields){
            if(field.isAnnotationPresent(FruitName.class)){
                FruitName fruitName = (FruitName) field.getAnnotation(FruitName.class);
                strFruitName=strFruitName+fruitName.value();
                System.out.println(strFruitName);
            }
            else if(field.isAnnotationPresent(FruitColor.class)){
                FruitColor fruitColor= (FruitColor) field.getAnnotation(FruitColor.class);
                strFruitColor=strFruitColor+fruitColor.fruitColor().toString();
                System.out.println(strFruitColor);
            }
            else if(field.isAnnotationPresent(FruitProvider.class)){
                FruitProvider fruitProvider= (FruitProvider) field.getAnnotation(FruitProvider.class);
                strFruitProvicer=" 供应商编号："+fruitProvider.id()+" 供应商名称："+fruitProvider.name()+" 供应商地址："+fruitProvider.address();
                System.out.println(strFruitProvicer);
            }
        }
    }
}
```

Apple.java
```java
import test.FruitColor.Color;

/**
 * 注解使用
 */
public class Apple {

    @FruitName("Apple")
    private String appleName;

    @FruitColor(fruitColor=Color.RED)
    private String appleColor;

    @FruitProvider(id=1,name="陕西红富士集团",address="陕西省西安市延安路89号红富士大厦")
    private String appleProvider;

    public void setAppleColor(String appleColor) {
        this.appleColor = appleColor;
    }
    public String getAppleColor() {
        return appleColor;
    }

    public void setAppleName(String appleName) {
        this.appleName = appleName;
    }
    public String getAppleName() {
        return appleName;
    }

    public void setAppleProvider(String appleProvider) {
        this.appleProvider = appleProvider;
    }
    public String getAppleProvider() {
        return appleProvider;
    }

    public void displayName(){
        System.out.println("水果的名字是：苹果");
    }
}
```

FruitRun.java
```java
/**
 * 输出结果
 */
public class FruitRun {
    public static void main(String[] args) {
        FruitInfoUtil.getFruitInfo(Apple.class);
    }
}
```

### 输出结果
水果名称：Apple
水果颜色：RED
供应商编号：1 供应商名称：陕西红富士集团 供应商地址：陕西省西安市延安路89号红富士大厦