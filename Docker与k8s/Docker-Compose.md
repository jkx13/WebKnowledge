## docker-compose批量容器编排
服务services: 容器，应用
项目Project:一组关联的容器
1. 安装
[官网下载](https://docs.docker.com/compose/install/)
```shell
下载: sudo curl -L  https://get.daocloud.io/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose


赋权：sudo chmod +x /usr/local/bin/docker-compose

执行：docker-compose version

```

2. 命令使用
```
参数选项:
-f --file FILE指定Compose模板文件，默认为docker-compose.yml
-p --project-name NAME 指定项目名称，默认使用当前所在目录为项目名
--verbose  输出更多调试信息
-v，-version 打印版本并退出
--log-level LEVEL 定义日志等级(DEBUG, INFO, WARNING, ERROR, CRITICAL)

基本命令:
docker-compose up #启动容器（守护进程需加 -d）
docker-compose down #关闭并删除容器
docker-compose [start | stop | pause | restart] #启动/停止/暂停/重启 容器 
docker-compose run NAME ping baidu.com #在指定容器运行命令
docker-compose kill #机制停止容器
docker-compose scale #设置服务运行的容器个数
docker-compose ps #列出项目中所有的容器
docker-compose rm #删除容器
docker-compose logs #查看日志
docker-compose bulid #构建项目中的容器
docker-compose push #推送镜像
docker-compose pull #拉取依赖镜像
docker-compose config #查看项目容器配置
docker-compose create #为服务创建容器
docker-compose exec NAME /bin/bash #进入指定容器
docker-compose port NAME 端口号 #显示某个容器端口所映射的公共端口

```
