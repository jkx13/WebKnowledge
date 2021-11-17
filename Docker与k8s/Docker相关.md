####  安装docker
[docker官网](https://www.docker.com)
[docker文档](https://docs.docker.com/engine/install/centos/)
[docker发布](https://hub.docker.com)

#### 镜像阿里云地址
[阿里云](https://developer.aliyun.com/article/110806)
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo


#### 启动docker
```
service docker start

//设置docker自启
systemctl enable docker
```

#### 查看docker运行
```
docker version
```

#### 创建容器：(可以使用systemctl启动服务)
```
docker run -d --name <name> --privileged=true -P <name:tag> /usr/sbin/init
```

#### 进入容器：
```
docker exec -it <name> /bin/bash
```

#### 保存容器当前状态
```
docker commit 容器ID <name>:<tag>
```

docker run -d --name <name> --privileged=true -p 80:80 -p8080:8080 <name:tag> /usr/sbin/init

#### 容器退出
```
//容器退出
exit
//容器不停止退出
Ctrl+P+Q
```

#### 查看容器元数据
```
docker inspect 容器ID
```

#### 查看容器日志
```
docker logs -t -f 容器ID
```

#### 查看容器运行
```
docker ps

//查看运行的过的容器(-q只显示容器ID)
docker ps -a
```

#### 搜索容器
```
docker search 名称 --filter=STARS=3000
```

#### 容器登录
```
docker login 命令用于登陆到一个 Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub。
```

#### 拉取容器
```
docker pull mysql:5.7
```

#### 删除容器
```
docker rmi -f 容器ID
```

#### 运行容器
```
docker run -it(命令交互输入) centos /bin/bash
```

#### 启动容器
```
docker start 容器ID
```

#### 停止容器
```
docker stop 容器ID

```

#### 后台运行容器（如果没有运行程序会自动停止容器)
```
docker run -d 容器ID

docker run -d --name 设置当前名称 -p 8080:80 nginx

curl localhost:8080 //查看是否可请求到

docker run -it --rm tomcat:9.0(用完即删，用于测试)

docker run -d -p 8088:8080 --name tomcat11 tomcat

//-e配置环境信息
docker run -d --name elasticsearch -p 9200:9200 -p9300:9300 -e "discovery.types=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2
docker run -d --name elasticsearch -p 9200:9200 -p9300:9300 -e "discovery.types=single-node" elasticsearch:7.6.2
```

#### 进入容器
```
ps -ef查看运行终端

//开启新终端
docker exec -it 容器ID /bin/bash 

//使用当前执行的终端
docker attach 容器ID
```

#### 从容器中拷贝文件
```
docker cp 容器ID:/home/test.java /home
```

#### 容器看内存性能
```
docker stats
```

#### 容器可视化
```
//-v挂载
//portainer
docker run -d -p8081:9000 --restart=always -v /var/run/docker.sock/:/var/run/docker.sock --privileged=true portainer/portainer

 docker run --name sentinel -d -p8858:8858 --restart=always --privileged=true bladex/sentinel-dashboard

//Rancher(CI/CD)持续集成
```

#### 提交
```
docker commit -m="提交信息" -a="作者名称" 容器ID 新名称:Tag
```

#### 卷(数据持续化 相互数据该改变)
```
docker run -it -v 主机目录:容器目录 （-v 主机目录:容器目录） 容器ID /bin/bash

//查看所有卷的情况
docker volume ls
//local     17f1a5a8e721658975151ef9a9c7b44f7fbdc33423f4840360ae8f4a55fe4808
//为匿名卷 -v只写容器内的路径，没有容器外的路径

//具名 -v写名称:容器内部路径

//查看工作本机卷路径
docker volume inspect 具名或匿名路径

//-v 容器路径:ro或rw

ro:readonly只读（容器内部无法操作)
rw:readwrite 可读性可写
```

#### 配置mysql的卷
```
docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MY_SQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
```

#### Docker file 文件
```
dockerfile文件内容:
FROM centos

VOLUME ["jkx01","jkx02"]

CMD echo "-------end-------"

CMD /bin/bash


//构建镜像
docker build -f /root/dockerfile -t jkx/centos:1.0 .
//docker build -f DockerFile -t 名称:Tag .（当前）
//运行
docker run -it --name centos01 jkx/centos:1.0
//--volumes-from实现同步共享至centos01（只要其中一个容器删除，共享文件还在）
docker run -it --name centos02 --volumes-from centos01 jkx/centos:1.0

//发布镜像
docker push 

```

#### DockerFile构建过程
```
1.关键字命令大写
2.执行至上而下
3.注释#
4.每一行命令是一层镜像

Dockerimage:使用dockerfile构建的镜像

Docker容器:是镜像运行起来的容器

FROM 基于那个基础镜像构建容器
RUN	执行类似Linux命令行 容器构建时需要运行的命令
ADD 拷贝本机文件或远程文件到镜像
COPY 拷贝本机文件到镜像
USER 指定容器启动的用户
ENTRYPOINT 容器启动时的命令 可以追加
CMD 同上容器启动时运行的命令 多个CMD只会最后一个生效 会被docker run 之后的参数替换

ONBUILD 构建一个被继承的Dockerfile运行命令，父镜像被子镜像继承时父镜像的onbuild触发
VOLUME 容器数据卷，数据持久化
ENV 用来构建镜像过程中设置的环境变量

WORKDIR 启动容器后默认进入的工作目录
EXPOSE 该容器默认暴露出来的端口

MAINTAINER 镜像维护者


dockerfile-----------

FROM centos
MAINTAINER jkx13

ENV MYPATH /usr/local
WORKDIR $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools

EXPOSE 80

CMD ["ls","-a"]
CMD echo $MYPATH
CMD echo "-----end------"
CMD /bin/bash

//如果名称为： DockerFile 可直接运行: docker build -t 名称:tag 

```

#### docker容器构建过程查看
```
docker history 容器ID
```

#### 发布镜像
```
1.注册 hub.docker.com

docker login //登录

docker push 名字/repository:Tag //提交至docker

//修改新增tag镜像
docker tag 容器ID repository:tag
```

#### 删除所有镜像
```
docker rm -f $(docker ps -aq)
```

```DockerFile

FROM centos
MAINTAINER jkx

COPY README.txt /usr/local/README.txt

ADD jdk-8ull-linux-x64.tar.gz /usr/local/
ADD apache-tomcat-9.0.22.tar.gz /usr/local/

RUN yum -y install vim

ENV MYPATH /usr/local
WORKDIR $MYPATH

ENV JAVA_HOME /usr/local/jdk1.8.0_11
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
ENV CATELINA_HOME /usr/local/apache-tomcat-9.0.22
ENV CATELINA_BASE /usr/local/apache-tomcat-9.0.22
ENV PATH $PATH:$JAVA_HOME/bin:$CATELINA_HOME/lib:$CATELINA_HOME/bin

EXPOSE 8080

CMD /usr/local/apache-tomcat-9.0.22/bin/startup.sh && tail -F /usr/local/apache-tomcat-9.0.22/bin/logs/catelina.out

```

#### Docker网络
```
ip addr 发现容器网络地址

docker exec -it 容器repository ip addr(命令)

//设置网络链接 --link
docker run -d -P --name tomcat03 --link tomcat01 tomcat:9.0

docker exec -it tomcat03 ping tomcat01

docker exec -it tomcat03 cat /etc/hosts

//查看docker 网络
docker network ls

docker network inspect 802ba5e14bd8

//docker0:默认域名不能直接访问
docker run -d -P --name tomcat01 --net bridge tomcat:9.0

```

#### 自定义网络
```
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet

docker network inspect mynet

docker run -d -P --name tomcat-net01 --net mynet tomcat:9.0
docker run -d -P --name tomcat-net02 --net mynet tomcat:9.0
docker exec -it tomcat-net02 ping tomcat-net01

```

#### 网络连通
```
//把容器放入网络mynet
docker run -d -P --name tomcat01 tomcat:9.0
docker network connect mynet tomcat01
docker network inspect mynet
```

#### Redis集群
```
for port in $(seq 1 6); \
do \
mkdir -p /mydata/redis/node-${port}/conf
touch /mydata/redis/node-${port}/conf/redis.conf
cat  EOF /mydata/redis/node-${port}/conf/redis.conf
port 6379 
bind 0.0.0.0
cluster-enabled yes 
cluster-config-file nodes.conf
cluster-node-timeout 5000
cluster-announce-ip 172.38.0.1${port}
cluster-announce-port 6379
cluster-announce-bus-port 16379
appendonly yes
EOF
done


docker run -p 6371:6379 -p 16371:16379 --name redis-1 \
    -v /mydata/redis/node-1/data:/data \
    -v /mydata/redis/node-1/conf/redis.conf:/etc/redis/redis.conf \
    -d --net redis --ip 172.38.0.11 redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf
	
docker exec -it redis-1 /bin/sh
```

[compose 选项](https://juejin.cn/post/6844903602129993741)

## docker-compose 中networks详解
```
概念:默认情况,compose会为应用创建一个网络，服务的每个容器都会加入这个网络中
服务名称作为hostname被其他容器访问；
应用程序的网络名称基于Compose的工程名称
而项目名称基于docker-compose.yml所在目录的名称。如需要修改工程名称，可使用--project-name标识或COMPOSE_PROJECT_NAME环境变量。

1.更新容器
当服务的配置发生变更时，可使用docker-compose up命令更新配置。
此时，Compose会删除旧容器并创建新容器。新容器会以不同的IP地址加入网络，名称保持不变。任何指向旧容器的连接都会被关闭，容器会重新找到新容器并连接上去。

2.links
服务之间可使用服务名称相互访问。links允许定义一个别名，从而使用给别名访问其他服务。

3.指定自定义网络
services:
	p:
		build: ./p
		networks:
			- front
	db:
		image: postgres
		networks:
			- back
	app:
		build: ./app
		networks:
			-front
			-back
其中p与db服务隔离，两者分别使用自己的网络，app服务可与两者通信。使用networks命令，可方便实现服务间的网络隔离与连接。
```