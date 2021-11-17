## 安装步骤
```
进入到linux路径/usr/local/src
wget http://download.redis.io/releases/redis-4.0.10.tar.gz
tar xzf redis-4.0.10.tar.gz
cd redis-4.0.10/
make
```
## 安装报错cc
```
 yum -y install gcc gcc-c++ libstdc++-devel
```

## 测试运行
```
在redis目录下
执行服务端: src/redis-server

执行客户端: src/redis-cli

```

## 修改配置
```
　(1)、#bind 127.0.0.1  将这里前面加上#否则远程无法连接redis或者只能连接ip为127.0.0.1的本地回环地址，无法连接真实的ip.

　　(2)、daemonize yes   （这里讲原来的no改为yes,目的是为了设置后台运行）

       (3)、protected-mode no  （这里讲原来的yes改为no,目的是为了解决安全模式引起的报错）
```

## 移动redis的配置文件
```
新建目录: mkdir /etc/redis && chmod 777 /etc/redis

```

## 杀死redis并重新后台开启redis
```
pkill -9 redis-server
src/redis-server /etc/redis/redis.conf
```

## 检测redis是否开启
```
ps axu | grep redis-server

如果是最新时间开启的redis，则表明开启成功
```

## 客户端远程通过ip连接redis

```
src/redis-cli -h 192.168.0.200 -p 6379
如果出现如下，则表明连接成功

192.168.0.200:6379>
```

## 设置开机启动
#### 1.编辑
```
 vim /etc/init.d/redis 
```
#### 2.添加内容
```shell
#!/bin/bash
#
# chkconfig: 2345 10 90  
# description: Start and Stop redis   
PATH=/usr/local/bin:/sbin:/usr/bin:/bin
REDISPORT=6379
EXEC=/usr/local/src/redis-4.0.10/src/redis-server
REDIS_CLI=/usr/local/src/redis-4.0.10/src/redis-cli
PIDFILE=/var/run/redis.pid
CONF="/usr/local/src/redis-4.0.10/redis.conf"
AUTH="1234"
case "$1" in
        start)
                if [ -f $PIDFILE ]
                then
                        echo "$PIDFILE exists, process is already running or crashed."  
                else
                        echo "Starting Redis server..."  
                        $EXEC $CONF
                fi
                if [ "$?"="0" ]
                then
"/etc/init.d/redis" 50L, 1739C                                4,1           Top

```

#### 3.设置redis文件权限
```
chmod 755 /etc/init.d/redis
```

#### 4. 启动redis
```
/etc/init.d/redis start
```

##### 5. 设置开机启动
```
cd /etc/init.d && chkconfig redis on

```

#### 6.注意
```

1.如果提示:service redis does not support chkconfig
是因为redis文件中没有写 注释 # chkconfig....

2. 无法通过http协议访问虚拟，需要关闭防火墙，防火墙相关命令
service iptables stop 暂停
chkconfig iptables off 永久关闭
service iptables status 检查状态
```