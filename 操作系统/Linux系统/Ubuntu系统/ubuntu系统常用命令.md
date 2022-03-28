## apt介绍
	apt是一个高层的管理工具，负责deb包源的管理，可以进行安装卸载软件包，其低层调用了dpkg负责deb包的安装卸载。
	其中deb在整个安装过程中有很多个状态 not-installed, half-installed, installed 等等，具体可查阅dpkg信息。
	因此deb安装的整个过程被详细的记录在apt或dpkg的状态文件中，所以，遇到安装问题时首先使用apt管理工具处理源相关问题或者deb包下载、安装和卸载问题，
	当遇到关于dpkg相关问题时优先查阅dpkg文档进行解决。

## apt命令
	apt-cache search package	搜索包
	apt-cache show package	获取包的相关信息，如说明、大小、版本等
	apt-cache depends package	了解使用依赖
	apt-cache rdepends package	查看该包被哪些包依赖
	sudo apt-get install package	安装包
	sudo APT-get install package –reinstall	重新安装包
	sudo apt-get -f install	修复安装 -f = –fix-missing
	sudo apt-get remove package	删除包
	sudo apt-get remove package –purge	删除包，包括删除配置文件
	sudo apt-get update	更新源
	sudo apt-get upgrade	更新已安装的包
	sudo apt-get dist-upgrade	升级系统
	sudo apt-get dselect-upgrade	使用dselect升级
	sudo apt-get build-dep package	安装相关的编译环境
	apt-get sourcepackage	下载该包的源代码
	sudo apt-get clean && sudo apt-get autoclean	清理无用的包
	apt-key add filename	增加软件包的公钥信息，如果filename为“-”，则从标准输入中导入公钥信息
	apt-key del keyid	从可信公钥中移除指定keyid的公钥
	apt-key list	方法查看已有公钥信息，/etc/apt/sources.list 存储软件源二进制包更新地址

## apt仓库增加新的软件包
```
$wget -O - http://packages.elasticsearch.org/GPG-KEY-elasticsearch | sudo apt-key add -
 
$sudo echo "deb http://packages.elasticsearch.org/elasticsearch/1.1/debian stable main" >> /etc/apt/sources.list
```
	
 
## 系统和和软件更新
优先更新仓库源
```shell
apt-get update
apt-get upgrade
```

## 卸载指定软件
	// 删除python3 软件包，不包括配置文件
	# apt-get remove python3
	// 删除python3 软件包，包括配置文件
	# apt-get purge python3
	// 删除python3 软件包和其依赖软件包
	# apt-get autoremove python3
	// 删除python3 软件包和其依赖软件包、配置文件
	# apt-get --purge autoremove python3


## 使用apt-get安装软件包时中途杀死进行后出错
	// 清除 /var/cache/apt/archive目录下缓存的deb文件
	# apt-get clean
	// 删除/var/cache/apt/archive/lock文件和/var/lib/dpkg/lock文件
	# rm /var/cache/apt/archive/lock
	# rm /var/lib/dpkg/lock
 
## 删除未完成安装的软件包和配置文件
	# dpkg --remove --force-all  软件包名
	# dpkg --force-remove-reinstreq 软件包名

## apt添加阿里源

### 备份修改源
```
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak 
sudo vim /etc/apt/sources.list sudo apt update 
sudo apt upgrade

```
源内容：
```
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
```

### 更新
```
sudo apt update
sudo apt upgrade
```

## 设置开机启动
```
sudo systemctl enable docker.service

```

## 关闭开机启动
```
sudo systemctl disable docker.service

```

## 查看是否设置开机启动
```
sudo systemctl list-unit-files | grep enable

```

## 查看已启动的服务
```
sudo systemctl list-units --type=service

```