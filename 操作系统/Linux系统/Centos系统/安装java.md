## 安装命令
```shell
//上传包 jdk默认安装在/usr/java中
rpm -ivh jdk-8u191-linux-x64.rpm

java -version
```

## 配置环境变量
```
vim /etc/profile

//根据实际名称添加如下变量信息
JAVA_HOME=/usr/java/jdk1.8.0_221-amd64 
JRE_HOME=/usr/java/jdk1.8.0_221-amd64/jre 
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin 
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib 
export JAVA_HOME JRE_HOME PATH CLASSPATH


//配置生效
source /etc/profile
echo $PATH
```
