####  安装docker
[docker文档](https://docs.docker.com/engine/install/centos/)

#### 镜像阿里云地址
[阿里云](https://developer.aliyun.com/article/110806)

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