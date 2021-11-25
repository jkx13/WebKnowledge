## 下载地址(Windows)
[官网下载](http://maven.apache.org/download.cgi)
选择apache-maven-3.8.4-bin.zip


## 解压
解压后放入没有中文或特殊符号的路径中

## 配置环境变量
（1）在环境变量中写入
MAVEN_HOME
D:\Program Files\apache-maven-3.8.4-bin\apache-maven-3.8.4

（2）在path中写入
%MAVEN_HOME%\bin

## 配置仓库地址
（1） 本地仓库： 本地缓存，已经下载的jar包，下次就直接使用缓存

（2） 中央仓库 ： 由maven团队统一维护的jar包仓库http://repo1.maven.org/maven2

（3） 私有仓库：私有搭建仓库

#### 1. 在bin同目录下新建repository

#### 2. 在conf/settings.xml
```
<localRepository>D:\Program Files\apache-maven-3.8.4-bin\apache-maven-3.8.4\repository</localRepository>
```

#### 3. 配置私有仓库（阿里云）
```
<mirror>
		<id>nexus-aliyun</id>
		<mirrorOf>*</mirrorOf>
		<name>Nexus aliyun</name>
		<url>http://maven.aliyun.com/nexus/content/groups/public</url>
	</mirror>
```
注意： 只配置一个mirror不然冲突