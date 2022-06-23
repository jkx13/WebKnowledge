
### maven-surefire-plugin 介绍
- Maven本身并不是一个单元测试框架
- 在构建执行到特定生命周期阶段的时候，通过插件来执行JUnit或者TestNG的测试用例
- 测试运行器(Test Runner)，它能兼容JUnit 3、JUnit 4以及TestNG
- 自动执行测试源码路径（默认为src/test/java/
- 符合命名模式
```
**/Test*.java：任何子目录下所有命名以Test开关的Java类。
**/*Test.java：任何子目录下所有命名以Test结尾的Java类。
**/*TestCase.java：任何子目录下所有命名以TestCase结尾的Java类。
```
- 要想跳过测试，在命令行加入参数skipTests就可以了。如：
```
mvn package -DskipTests  
```

- 需要跳过测试运行，还要跳过测试代码的编译
```
mvn package -Dmaven.test.skip=true  
```

- 动态指定要运行的测试用例
```
// 可以使用“，”号指定多个测试类：
mvn test -Dtest=Random*Test,AccountCaptchaServiceTest
```

- 可以添加-DfailIfNoTests=false参数告诉maven-surefire-plugin即使没有任何测试也不要报错
```
mvn test -Dtest -DfailIfNoTests=false  

```

## maven-compiler-plugin
- maven-compiler-plugin 插件来对 Java 代码编译的，如果不指定 JDK 版本，maven-compiler-plugin 会自动使用一个默认的版本；
-  maven-compiler-plugin 默认的 JDK 版本为 1.5，此时 JDK 1.5 是不可能将带有 JDK 1.8 特性的代码编译通过的
指定jdk 版本
```

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
 
    <groupId>cn.dasheng</groupId>
    <artifactId>springclouddemo</artifactId>
    <version>1.0-SNAPSHOT</version>
 
    <properties>
        <!-- maven-compiler-plugin 将会使用指定的 JDK 版本对源代码进行编译（针对编译运行环境） -->
        <maven.compiler.source>8</maven.compiler.source>
        <!-- maven-compiler-plugin 将会使用指定的 JDK 版本将 java 文件编译为 class 文件（针对编译运行环境）-->
        <maven.compiler.target>8</maven.compiler.target>
    </properties>
 
</project>
```