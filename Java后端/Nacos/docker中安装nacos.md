## 这里我们直接使用镜像仓库中制作好的镜像
```
# 拉取镜像
docker pull nacos/nacos-server
```

## 运行
- 通过 MODE 来设置使用单机模式；
- 注意如果是多网卡的话需要配置NACOS_SERVER_IP参数来指定IP，否则可能会导致外网无法访问
```
docker run -d  --name nacos -p 8848:8848 --env MODE=standalone --env NACOS_SERVER_IP=172.18.69.59 nacos/nacos-server

//启动成功后访问http://172.18.69.59:8848/nacos/index.html 即可，默认是账号和密码都是nacos。

```


## 集群部署
同样准备3台服务器；分别执行如下命令；注意NACOS_SERVER_IP 参数需要修改为各个服务器自己的IP地址
```
docker run -d --name nacos-cluster -p 8848:8848 \
  --env NACOS_SERVERS=172.18.69.59,192.168.56.104,192.168.56.105 \
  --env NACOS_SERVER_IP=172.18.69.59 \
  --env SPRING_DATASOURCE_PLATFORM=mysql \
  --env MYSQL_SERVICE_HOST=192.168.56.103 \
  --env MYSQL_SERVICE_DB_NAME=nacos \
  --env MYSQL_SERVICE_USER=root \
  --env MYSQL_SERVICE_PASSWORD=123456 \
  --env MYSQL_DATABASE_NUM=1 \
  nacos/nacos-server
```

- NACOS_SERVERS : 集群节点信息
- NACOS_SERVER_IP : 服务IP，多网卡模式下建议指定
- SPRING_DATASOURCE_PLATFORM : 使用数据库类型
- MYSQL_SERVICE_HOST : MySQL数据库地址
- MYSQL_SERVICE_DB_NAME : 数据库名称
- MYSQL_SERVICE_DB_NAME : 数据库用户名
- MYSQL_SERVICE_PASSWORD : 数据库密码
- MYSQL_DATABASE_NUM : 数据库数量，默认就是1，可以不填写

- 可以通过docker日志命令查询nacos的日志信息
```
docker logs -ft --tail 200 nacos-cluster
```