## 1. 新增JAVA_HOME
1. 新增Java安装目录，如：D:\Program Files\Java\jdk1.8.0_131
2. 在系统环境path中添加：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

## 2. CLASSPATH
1. 系统环境变量中新增：.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar

## 3. 检查Java
```shell
java
javac
java -version
```