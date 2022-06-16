
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