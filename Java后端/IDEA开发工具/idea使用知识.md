## 隐藏文件说明(.iml .idea)
.iml是 intellij idea的工程配置文件，里面是当前project的一些配置信息;(删除后可以在maven 点击Reimport All Maven Project)
.Idea存放项目的配置信息，包括历史记录，版本控制信息等;

## target目录
target是用来存放项目构建后的文件和目录、jar包、war包、编译的class文件（所有都是Maven构建时生成的）

## 蓝色小方块（moudles）
表示 模块已识别
- 未识别模块（无蓝色方块）
方法： 右侧Maven => + 加号 => 选中未被识别的模块pom.xml

## 更新maven 依赖（idea）
1. 在左侧 选中 模块右键 =》 选中Maven => Reimport 
2. 在右侧 Maven => 选中要更新依赖项目，=》 点击更新圈
3. 可能本地仓库有依赖，需要删除本地仓库，才会下载最新（针对同版本的）

## idea创建Maven项目慢的问题DarchetypeCatalog
-  idea构建项目时，会下载插件资源，初次构建造成耗时较长 ，可以通过设置-DarchetypeCatalog=internal

## Using platform encoding (UTF-8 actually) to copy filtered resources, i.e. build is platform dependent!
在项目pom.xml中增加如下配置：
```
<properties>
	<project.build.sourceEcoding>UTF-8</project.build.sourceEcoding>
</properties>
```
或
```
<project>  
  ...  
  <!-- 手动添加编码UTF-8-->
  <properties>
      <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
      <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
  </properties>
  ...  
</project>
```

## Failed to execute goal org.apache.maven.plugins:maven-surefire-plugin:2.12.4
- 这是因为测试代码时遇到错误，它会停止编译。只需要在pom.xml的里添加以下配置，使得测试出错不影响项目的编译

```
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <configuration>
                <testFailureIgnore>true</testFailureIgnore>
            </configuration>
        </plugin>
    </plugins>
</build>
```
或
```
mvn clean install -Dtest -DfailIfNoTests=false  
```