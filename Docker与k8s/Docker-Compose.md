## docker-compose批量容器编排
服务services: 容器，应用
项目Project:一组关联的容器
1. 安装
[官网下载](https://docs.docker.com/compose/install/)
```shell
下载: sudo curl -L  https://get.daocloud.io/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose


赋权：sudo chmod +x /usr/local/bin/docker-compose

执行：docker-compose version

```

2. 命令使用
```
开始构建镜像: docker-compose up （守护进程需加 -d）

停止运行中的容器: docker-compose down 

重新构建容器: docker-compose build

```