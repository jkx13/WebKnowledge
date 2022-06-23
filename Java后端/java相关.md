## java 值传递和引用传递
1. 在方法参数 传递基本类型 是以值的拷贝
2. 在方法参数 传递引用类型 是以内存地址的值传递，共用同一堆内存

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
    　　5. setWriteMethod(Method writeMethod)，设置用于写入属性值的方法;
```

## java反射
每个类都有一个 Class 对象，包含了与类有关的信息。当编译一个新类时，会产生一个同名的 .class 文件，该文件内容保存着 Class 对象。

类加载相当于 Class 对象的加载，类在第一次使用时才动态加载到 JVM 中。也可以使用 Class.forName("com.mysql.jdbc.Driver") 这种方式来控制类的加载，该方法会返回一个 Class 对象。

反射可以提供运行时的类信息，并且这个类可以在运行时才加载进来，甚至在编译时期该类的 .class 不存在也可以加载进来。

反射的核心是 JVM 在运行时才动态加载类或调用方法/访问属性，它不需要事先（写代码的时候或编译期）知道运行对象是谁。

重点：是运行时而不是编译时
Class 和 java.lang.reflect 一起对反射提供了支持，java.lang.reflect 类库主要包含了以下三个类：
- Field ：可以使用 get() 和 set() 方法读取和修改 Field 对象关联的字段；
- Method ：可以使用 invoke() 方法调用与 Method 对象关联的方法
- Constructor ：可以用 Constructor 的 newInstance() 创建新的对象

### 反射的优点：

- **可扩展性** ：应用程序可以利用全限定名创建可扩展对象的实例，来使用来自外部的用户自定义类。
- **类浏览器和可视化开发环境** ：一个类浏览器需要可以枚举类的成员。可视化开发环境（如 IDE）可以从利用反射中可用的类型信息中受益，以帮助程序员编写正确的代码。
- **调试器和测试工具** ： 调试器需要能够检查一个类里的私有成员。测试工具可以利用反射来自动地调用类里定义的可被发现的 API 定义，以确保一组测试中有较高的代码覆盖率。

### 反射的缺点：

尽管反射非常强大，但也不能滥用。如果一个功能可以不用反射完成，那么最好就不用。在我们使用反射技术时，下面几条内容应该牢记于心。

- **性能开销** ：反射涉及了动态类型的解析，所以 JVM 无法对这些代码进行优化。因此，反射操作的效率要比那些非反射操作低得多。我们应该避免在经常被执行的代码或对性能要求很高的程序中使用反射。由于反射会额外消耗一定的系统资源，因此如果不需要动态地创建一个对象，那么就不需要用反射。

- **安全限制** ：使用反射技术要求程序必须在一个没有安全限制的环境中运行。如果一个程序必须在有安全限制的环境中运行，如 Applet，那么这就是个问题了。反射调用方法时可以忽略权限检查，因此可能会破坏封装性而导致安全问题。

- **内部暴露** ：由于反射允许代码执行一些在正常情况下不被允许的操作（比如访问私有的属性和方法），所以使用反射可能会导致意料之外的副作用，这可能导致代码功能失调并破坏可移植性。反射代码破坏了抽象性，因此当平台发生改变的时候，代码的行为就有可能也随着变化。

## 反射用途
**反射最重要的用途就是开发各种通用框架**。很多框架（比如 Spring）都是配置化的（比如通过 XML 文件配置 Bean），为了保证框架的通用性，它们可能需要根据配置文件加载不同的对象或类，调用不同的方法，这个时候就必须用到反射，运行时动态加载需要加载的对象。

### 获取Class对象
1. 使用 Class 类的 forName 静态方法:
```java
 public static Class<?> forName(String className)	
 比如在 JDBC 开发中常用此方法加载数据库驱动:		
					
 Class.forName(driver);							
```

2. 直接获取某一个对象的 class，比如:
```java
Class<?> klass = int.class;
Class<?> classInt = Integer.TYPE;
```

3. 调用某个对象的 getClass() 方法，比如:
```java
StringBuilder str = new StringBuilder("123");
Class<?> klass = str.getClass();

```

### 判断是否是类的实例
我们用 instanceof 关键字来判断是否为某个类的实例。同时我们也可以借助反射中 Class 对象的 isInstance() 方法来判断是否为某个类的实例，它是一个 native 方法：
```java
public native boolean isInstance(Object obj);
```

### 创建实例
通过反射来生成对象主要有两种方式。

- 使用Class对象的newInstance()方法来创建Class对象对应类的实例。
```java
Class<?> c = String.class;
Object str = c.newInstance();

```

- 先通过Class对象获取指定的Constructor对象，再调用Constructor对象的newInstance()方法来创建实例。这种方法可以用指定的构造器构造类的实例。
```java
//获取String所对应的Class对象
Class<?> c = String.class;
//获取String类带一个String参数的构造器
Constructor constructor = c.getConstructor(String.class);
//根据构造器创建实例
Object obj = constructor.newInstance("23333");
System.out.println(obj);
```

### 获取方法
获取某个Class对象的方法集合，主要有以下几个方法：

- getDeclaredMethods 方法返回类或接口声明的所有方法，包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法。
```java
public Method[] getDeclaredMethods() throws SecurityException

```
- getMethods 方法返回某个类的所有公用（public）方法，包括其继承类的公用方法。
```java
public Method[] getMethods() throws SecurityException

```
- getMethod 方法返回一个特定的方法，其中第一个参数为方法名称，后面的参数为方法的参数对应Class的对象。
```java
public Method getMethod(String name, Class<?>... parameterTypes)
```
```java
package org.ScZyhSoft.common;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
public class test1 {
	public static void test() throws IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
	        Class<?> c = methodClass.class;
	        Object object = c.newInstance();
	        Method[] methods = c.getMethods();
	        Method[] declaredMethods = c.getDeclaredMethods();
	        //获取methodClass类的add方法
	        Method method = c.getMethod("add", int.class, int.class);
	        //getMethods()方法获取的所有方法
	        System.out.println("getMethods获取的方法：");
	        for(Method m:methods)
	            System.out.println(m);
	        //getDeclaredMethods()方法获取的所有方法
	        System.out.println("getDeclaredMethods获取的方法：");
	        for(Method m:declaredMethods)
	            System.out.println(m);
	    }
    }
class methodClass {
    public final int fuck = 3;
    public int add(int a,int b) {
        return a+b;
    }
    public int sub(int a,int b) {
        return a+b;
    }
}
```

### 构造器信息
获取类构造器的用法与上述获取方法的用法类似。主要是通过Class类的getConstructor方法得到Constructor类的一个实例，而Constructor类有一个newInstance方法可以创建一个对象实例:
```java
public T newInstance(Object ... initargs)
```

### 获取类的成员变量（字段）信息
- getFiled：访问公有的成员变量
- getDeclaredField：所有已声明的成员变量，但不能得到其父类的成员变量

### 方法调用
当我们从类中获取了一个方法后，我们就可以用 invoke() 方法来调用这个方法。invoke 方法的原型为:

```java
public Object invoke(Object obj, Object... args)
        throws IllegalAccessException, IllegalArgumentException,
           InvocationTargetException
```
invoke 方法的实例
```java
public class test1 {
    public static void main(String[] args) throws IllegalAccessException, InstantiationException, NoSuchMethodException, InvocationTargetException {
        Class<?> klass = methodClass.class;
        //创建methodClass的实例
        Object obj = klass.newInstance();
        //获取methodClass类的add方法
        Method method = klass.getMethod("add",int.class,int.class);
        //调用method对应的方法 => add(1,4)
        Object result = method.invoke(obj,1,4);
        System.out.println(result);
    }
}
class methodClass {
    public final int fuck = 3;
    public int add(int a,int b) {
        return a+b;
    }
    public int sub(int a,int b) {
        return a+b;
    }
}
```


## 面向过程性能比面向对象高
面向过程 ：面向过程性能比面向对象高。 因为类调用时需要实例化，开销比较大，比较消耗资源，所以当性能是最重要的考量因素的时候，比如单片机、嵌入式开发、Linux/Unix等一般采用面向过程开发。

这个并不是根本原因，面向过程也需要分配内存，计算内存偏移量，Java性能差的主要原因并不是因为它是面向对象语言，而是Java是半编译语言，最终的执行代码并不是可以直接被CPU执行的二进制机械码。

而面向过程语言大多都是直接编译成机械码在电脑上执行，并且其它一些面向过程的脚本语言性能也并不一定比Java好。

## Java8中引入的一个语法糖--方法引用
- 类名::静态方法名
```
str -> Integer.parseInt(str) 
对应的方法引用：
Integer::parseInt
```
- 对象::实例方法名
```
class A {
  void a(String s) {
    System.out.println(s);
  }
}

interface B {
  void b(String s);
}

A a = new A();
B b = s -> a.a(s); // 等价于 B b = a::a;
```
- 类名::实例方法名
```
str -> str.toLowerCase(); // 对应方法引用写法：String::toLowerCase

```
- 类型::new（构造方法的引用）

```
len -> new int[len]
// 简写
ini[len]::new
```
示例：
```
String的静态方法valueOf对应的方法引用为String::valueOf
Object的构造方法对应的方法引用为Object::new
调用对象o的实例方法hashCode对应的方法引用为o::hashCode

```

### Lambda表达式
- 创建接口的一个实现类，然后通过该类来创建实例
```
interface A {
    void say(String s);
}

class AImpl implemnets A {
    @Override
    public void say(String s) {
        System.out.println(s);
    }
}
A a = new AImpl();
```

- 通过匿名内部类的形式

```
interface A {
    void say(String s);
}
A a = new A() {
    @Override
    public void say(String s) {
       System.out.println(s);
    }
}
// 有相当一部分接口实际上只有一个抽象方法（default方法不是抽像方法），对于这样的接口，我们称之为函数式接口
// 比如Comparator、Runnable等接口。
```

- jdk中的函数式接口的声明处一般都有@FunctionalInterface注解，加上这个注解的接口，如果不满足函数式接口的规范（只有一个抽象方法），编译器就会报错;

- Java8引入lambda表达式来进一步简化匿名内部类的写法，因此非函数式接口是不能用lambda表达式的形式来创建接口的实例;

```
如果参数只有1个，则可以省略掉括号
如果代码块中只有一行代码，则可以省略掉花括号和代码块结尾的分号
如果代码块中只有一条语句，且该语句为return语句，则可以将return省略
```

- 将一个整型数字转换成对应的字符串
```
// 接口
interface A {
   String m(Integer i);
}

// 创建A的一个实例，lambda表达式写法
A a = i -> String.valueOf(i);
a.m(1); // 输出 "1"
```
- 将一个整型字符串转换成整型数字
```
// 接口
interface A {
   Integer m(String s);
}

// 创建A的一个实例，lambda表达式写法
A a = s -> Integer.valueOf(s);
a.m("1"); // 输出 1
```
- 因此对于这种代码，引入了方法引用进行简化，以上两个lambda表达式用方法引用的写法如下：
```
A a = String::valueOf
B b = Integer::valueOf
```