### ----------------------------CentOS--------------------------------------
#####  查看版本Red Hat:
```
cat /etc/redhat-release
```

#####   重启Redhat
```
reboot 
```

#####  切换root命令
```
sudo su 
```

##### 查看监听的端口(yum install net-tool)
```
netstat -lnpt
```
 
 ##### 检查端口被哪个进程占用
 ```
 netstat -lnpt |grep （端口)
 netstat -antl
```

##### 查看进程的详细信息
```
ps (进程ID)
```

##### 中止进程
```
kill -9 (进程ID)
```
 

##### 开放端口(firewalld-Centos7以上)
```
firewall-cmd --zone=public --add-port=5672/tcp --permanent   # 开放5672端口

firewall-cmd --zone=public --remove-port=5672/tcp --permanent  #关闭5672端口

firewall-cmd --reload   # 配置立即生效
```
 

##### 查看防火墙所有开放的端口
```
firewall-cmd --zone=public --list-ports
```

##### 查看防火墙状态
```
firewall-cmd --state
```

##### 禁用firewalld
```
sudo systemctl stop firewalld
sudo systemctl disable firewalld
```


##### 更新为阿里源
```
wget -O /etc/yum.repos.d/redhat.repo http://mirrors.aliyun.com/repo/Centos-8.repo
#或者
curl -o /etc/yum.repos.d/redhat.repo http://mirrors.aliyun.com/repo/Centos-8.repo
```

```
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo 
```

##### 清除YUM缓存
```
yum clean all
```
##### 建立缓存
```
yum makecache
```

##### 安装过程中显示正在安装的文件信息及安装进度
```
rpm -ivh example.rpm
```

##### 删除已安装的软件包
```
rpm -e example
```

 
##### 查询是否安装软件包
```
rpm -qa | grep "软件或者包的名字"(或 yum list installed | grep "gcc")
```
 
 
 #### Mac ssh连接报错
 ```
 ssh-keygen -R [服务器ip address]//更新
```
 
 
 #### Mac ssh连接成功后LC_TYPE错误
 ```
 1.在本地mac电脑上修改/etc/ssh/ssh_config或者/etc/ssh/ssh_config文件，删除掉或者注释掉以下配置内容
 #SendEnv LANG LC_*
```
 

## 配置静态IP地址（Centos7)访问网络
	1.示例配置（/etc/sysconfig/network-script/ifcfg-en33)设置网络
```json
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static        # 地址分配模式
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33              # 网卡名称
UUID=1fccfa54-98bd-4101-9eca-bc976d7c042a
DEVICE=ens33
ONBOOT=yes              # 是否开机激活
IPADDR=192.168.0.135    # IP地址
NETMASK=255.255.255.0   # 子网掩码
GATEWAY=192.168.0.1     # 网关地址
DNS1=114.114.114.114    # DNS地址
DNS2=8.8.8.8            # DNS地址
```

	2.重启网络
```shell
service network restart
```

## 配置动态网络(Centos7)
	1.配置
```
BOOTPROTO=dhcp
ONBOOT=yes
```

	2.重启网络
```
service network restart
```

## 查软件包与卸载
```
rpm -qa|grep mariadb

rpm -e mariadb-libs-5.5.60-1.el7_5.x86_64 --nodeps
```

## 解压包
```
(1) *.tar 用 tar –xvf 解压
(2) *.gz 用 gzip -d或者gunzip 解压
(3) *.tar.gz和*.tgz 用 tar –xzf 解压
(4) *.bz2 用 bzip2 -d或者用bunzip2 解压
(5) *.tar.bz2用tar –xjf 解压
(6) *.Z 用 uncompress 解压
(7) *.tar.Z 用tar –xZf 解压
(8) *.rar 用 unrar e解压
(9) *.zip 用 unzip 解压
(10) *.xz 用 xz -d 解压
(11) *.tar.xz 用 tar -zJf 解压
```

## centos 网络设置
```shell
1. 设置IP相关信息
vim /etc/sysconfig/network-scripts/ifcfg-en33

2. 设置添加信息
BOOTPROTO=static

ONBOOT=yes
IPADDR=192.168.0.110
NETMASK=255.255.255.0
GATEWAY=192.168.0.1
DNS1=114.114.114.114

2.重启网络
service network restart / systemctl restart network.service

```