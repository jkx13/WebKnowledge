## 约定式目录结构
```
项目
	/src
		/main 主程序目录 （完成项目功能代码和配置文件)
			/java (包相关类定义)
			/resources （配置资源文件)
		/test
			/java
			/resources
	/pom.xml (maven配置文件)
```

## Mac idea中终端无法检测到mvn
```
1. vim ~/.zshc再末尾加入 srouce ~/.bash_profile
```

## Maven的POM.xml文件
> Maven是基于项目对象模型（Project Object Model，POM）的概念,用来管理项目的依赖以及项目的编译等功能

#### dependencies元素
```
是项目依赖包,使用<dependency></dependency>

<dependency></dependency>内部通过groupId、artifactId、version确定唯一的依赖，可以称这3个为坐标。

groupId：组织的唯一标识。

artifactId：项目的唯一标识。

version：项目的版本。
```

#### properties元素
```xml
<properties></properties>可以定义变量在dependency中引用，代码如下所示：

<properties>
    <java.version>1.8</java.version>
    <spring-framework.version>4.3.18.RELEASE</spring-framework.version>
</properties>

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring-framework.version}</version>
</dependency>

```

#### 编译插件
```xml
Maven提供了编译插件，可在编译插件中设置Java的编译级别，代码如下：

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
            <configuration>
                <source>${java.version}</source>
                <target>${java.version}</target>
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### moudles
> 模块化，设计模式原则：“高内聚，低耦合”

#### dependencyManagement
```
1)dependencies相对于dependencyManagement，所有生命在dependencies里的依赖都会自动引入，并默认被所有的子项目继承。
2)dependencyManagement里只是声明依赖，并不自动实现引入，因此子项目需要显示的声明需要用的依赖。
如果不在子项目中声明依赖，是不会从父项目中继承下来的；
只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且version和scope都读取自父pom;
另外如果子项目中指定了版本号，那么会使用子项目中指定的jar版本。

```