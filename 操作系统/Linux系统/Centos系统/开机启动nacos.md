## 1. 编辑
```
vim /lib/systemd/system/nacos.service
```
## 2. 配置nacos.service()
```
[Unit]
Description=nacos
After=network.target
[Service]
Type=forking
ExecStart=/home/nacos/bin/startup.sh -m standalone
ExecReload=/home/nacos/bin/shutdown.sh
ExecStop=/home/nacos/bin/shutdown.sh
PrivateTmp=true
[Install]
WantedBy=multi-user.target
~                            
```

## 3. 重新加载配置
```
systemctl daemon-reload
systemctl enable nacos.service
systemctl start nacos.service
```

## 4. 如遇到如下错误
```
ERROR: Please set the JAVA_HOME variable in your environment, We need java(x64)! jdk8 or later is better! !!
Nov 09 09:00:57 localhost.localdomain systemd[1]: nacos.service: control process exited, code=exited status=1
Nov 09 09:00:57 localhost.localdomain systemd[1]: Failed to start nacos.
```

## 5. 修改nacos/bin/startup.sh
```
定位到JAVA_HOME 修改如下:
# 修改Java安装路径
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/local/jdk1.8.0_191 
#[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/java
#[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/opt/taobao/java
#[ ! -e "$JAVA_HOME/bin/java" ] && unset JAVA_HOME
```

## 6. 重启命令
```
systemctl start nacos.service
```