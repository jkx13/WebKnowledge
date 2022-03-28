## 拉取版本
```
docker pull mysql:5.7   # 拉取 mysql 5.7

```

## 检查是否拉取成功

```
docker images
```

## 一般来说数据库容器不需要建立目录映射
```
sudo docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

–name：容器名，此处命名为mysql
-e：配置信息，此处配置mysql的root用户的登陆密码
-p：端口映射，此处映射 主机3306端口 到 容器的3306端口
-d：后台运行容器，保证在退出终端后容器继续运行

```

## 如果要建立目录映射
```
duso docker run -p 3306:3306 --name mysql \
-v /usr/local/docker/mysql/conf:/etc/mysql \
-v /usr/local/docker/mysql/logs:/var/log/mysql \
-v /usr/local/docker/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql:5.7

```

## 检查是否运行
```
docker container ls

```

## 进入容器
```
sudo docker exec -it mysql bash

```

## 开启防火墙
```
# 开放端口：
$ systemctl status firewalld
$ firewall-cmd  --zone=public --add-port=3306/tcp -permanent
$ firewall-cmd  --reload
# 关闭防火墙：
$ sudo systemctl stop firewalld

```

## 需要进入docker本地客户端设置远程访问账号
```
$ sudo docker exec -it mysql bash
$ mysql -uroot -p123456
mysql> grant all privileges on *.* to root@'%' identified by "password";
mysql> flush privileges;
mysql> select host,user from user;
```