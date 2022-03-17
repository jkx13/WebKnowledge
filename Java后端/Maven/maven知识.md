[中央仓库](http://mvnrepository.com/)

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

## 构建过程
- 清理clean：将以前编译得到的旧文件class字节码文件删除
- 编译compile：将java源程序编译成class字节码文件
- 测试test：自动测试，自动调用junit程序
- 报告report：测试程序执行的结果
- 打包package：动态Web工程打War包，java工程打jar包
- 安装install：Maven特定的概念-----将打包得到的文件复制到“仓库”中的指定位置（使用install命令把被依赖的maven工程的jar包导入到本地仓库中）
- 部署deploy：将动态Web工程生成的war包复制到Servlet容器下，使其可以运行

## scope就是依赖的范围
- 1、compile， 默认值，适用于所有阶段（开发、测试、部署、运行），本jar会一直存在所有阶段。

- 2、provided， 只在开发、测试阶段使用，目的是不让Servlet容器和你本地仓库的jar包冲突 。如servlet.jar。

- 3、runtime， 只在运行时使用，如JDBC驱动，适用运行和测试阶段。

- 4、test， 只在测试时使用，用于编译和运行测试代码。不会随项目发布。

- 5、system， 类似provided，需要显式提供包含依赖的jar，Maven不会在Repository中查找它。

## 生命周期
> 1. Clean Lifecycle 在进行真正的构建之前进行一些清理工作。 Clean生命周期一共包含了三个阶段：
```
pre-clean 执行一些需要在clean之前完成的工作
clean 移除所有上一次构建生成的文件
post-clean 执行一些需要在clean之后立刻完成的工作
```

> 2. Default Lifecycle 构建的核心部分，编译，测试，打包，部署等等。
```
validate
generate-sources
process-sources
generate-resources
process-resources 复制并处理资源文件，至目标目录，准备打包
compile 编译项目的源代码
process-classes
generate-test-sources
process-test-sources
generate-test-resources
process-test-resources 复制并处理资源文件，至目标测试目录
test-compile 编译测试源代码
process-test-classes
test 使用合适的单元测试框架运行测试。这些测试代码不会被打包或部署
prepare-package
package 接受编译好的代码，打包成可发布的格式，如 JAR
pre-integration-test
integration-test
post-integration-test
verify
install 将包安装至本地仓库，以让其它项目依赖。
deploy 将最终的包复制到远程的仓库，以让其它开发人员与项目共享
```

- 注意： 插件每个阶段都有插件（plugin），看上面标红的。插件的职责就是执行它对应的命令。

> 3. Site Lifecycle 生成项目报告，站点，发布站点。
```
pre-site 执行一些需要在生成站点文档之前完成的工作
site 生成项目的站点文档
post-site 执行一些需要在生成站点文档之后完成的工作，并且为部署做准备
site-deploy 将生成的站点文档部署到特定的服务器上

```

## 修改Maven 本地仓库地址
settings.xml这个配置文件;
```xml
<localRepository>C:\Program Files\Java\repository</localRepository>
```

## 依赖传递性

- WebMavenDemo=>JavaMavenService1=>JavaMavenService2;

- WebMavenDemo项目依赖JavaMavenService1， JavaMavenService1项目依赖JavaMavenService2;
为JavaMavenService2中增加了一个spring-core.jar包后，会惊喜的发现依赖的两个项目都自动的增加了这个jar包，这就是依赖的传递性;
**注意：非compile范围的依赖是不能传递的。**

## 依赖版本的原则：
JavaMavenService2的log4j的版本是1.2.7版本，JavaMavenService1排除了此包的依赖，自己加了一个Log4j的1.2.9的版本，那么WebMavenDemo项目遵守路径最短优先原则，Log4j的版本和JavaMavenService1的版本一致。

## 路径相同先声明优先原则
在WebMavenDemo的pom.xml中先声明的依赖就用谁的版本;

### 统一依赖版本声明
为了统一管理版本号，可以使用properties标签，里面可以自定义版本的标签名。在使用的地方使用${自定义标签名}；


## build配置
```xml
<build>
  <!-- 项目的名字 -->
  <finalName>WebMavenDemo</finalName>
  <!-- 描述项目中资源的位置 -->
  <resources>
    <!-- 自定义资源1 -->
    <resource>
      <!-- 资源目录 -->
      <directory>src/main/java</directory>
      <!-- 包括哪些文件参与打包 -->
      <includes>
        <include>**/*.xml</include>
      </includes>
      <!-- 排除哪些文件不参与打包 -->
      <excludes>
        <exclude>**/*.txt</exclude>
          <exclude>**/*.doc</exclude>
      </excludes>
    </resource>
  </resources>
  <!-- 设置构建时候的插件 -->
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>2.1</version>
      <configuration>
        <!-- 源代码编译版本 -->
        <source>1.8</source>
        <!-- 目标平台编译版本 -->
        <target>1.8</target>
      </configuration>
    </plugin>
    <!-- 资源插件（资源的插件） -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-resources-plugin</artifactId>
      <version>2.1</version>
      <executions>
        <execution>
          <phase>compile</phase>
        </execution>
      </executions>
      <configuration>
        <encoding>UTF-8</encoding>
      </configuration>
    </plugin>
    <!-- war插件(将项目打成war包) -->
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-war-plugin</artifactId>
      <version>2.1</version>
      <configuration>
        <!-- war包名字 -->
        <warName>WebMavenDemo1</warName>
      </configuration>
    </plugin>
  </plugins>
</build>
```
配置好build后，执行mvn package之后，在maven工程指定的target目录里war包和文件都按照配置的生成了



