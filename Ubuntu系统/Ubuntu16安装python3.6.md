## 安装python3.6
首页配置阿里云的更新源
输入命令:  sudo add-apt-repository ppa:jonathonf/python3.6
输入: sudo apt-get update
输入: sudo apt-get install python3.6
调整Python3的优先级，使得3.6优先级较高
```shell
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.5 1

sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.6 2
```

更改默认值，python默认为Python2，现在修改为Python3

```shell
sudo update-alternatives --install /usr/bin/python python /usr/bin/python2 100

sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 150
```


## 提示：ModuleNotFoundError: No module named 'gdbm'
	解决办法：sudo apt-get install python3.6-gdbm

## 安装aptitude工具,实现依赖自动安装，依赖版本自动降级或升级
```
# apt-get install aptitude
# aptitude install python3-pip
```

## ModuleNotFoundError: No module named 'apt_pkg' 错误解决
	今天在安装docker的时候遇到这个问题了，通过搜索解决方案解决了，所以记录一下。
	猜测原因应该是今天升级了系统的Python版本，然后python3的软链接也被我改成指向最新版本了

解决方法
```
sudo apt-get remove --purge python-apt
sudo apt-get install python-apt -f 
cd /usr/lib/python3/dist-packages/ 
sudo cp apt_pkg.cpython-3?m-x86_64-linux-gnu.so apt_pkg.cpython-36m-x86_64-linux-gnu.so 
```
