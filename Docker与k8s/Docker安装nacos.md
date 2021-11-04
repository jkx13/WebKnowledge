## 添加本地application.properties
```shell
spring.datasource.platform=mysql
db.num=1
db.url.0=jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false
db.user=root
db.password=root
```

## 执行docker命令
```shell
docker run -d --restart=always --name my-nacos -p 8848:8848 -e MODE=standalone -v /data/docker/nacos/application.properties:/home/nacos/conf/application.properties -v /data/docker/nacos/logs:/home/nacos/logs nacos/nacos-server:latest
```