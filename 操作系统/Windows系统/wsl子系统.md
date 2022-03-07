## wsl命令
[官网](https://docs.microsoft.com/zh-cn/windows/wsl/install)

1. 在管理员 PowerShell 或 Windows 命令提示符中输入此命令
```shell
wsl --install
```

2. 重启计算机来安装运行适用于 Linux 的 Windows 子系统 (WSL) 所需的全部内容。

3. 更改安装的发行版
```shell
wsl --install -d <Distribution Name>
```

4. 查询可用 Linux 发行版列表
```shell
wsl --list --online 或 wsl -l -o
```

5. 初始安装后安装其他 Linux 发行版
```shell
wsl --install -d <Distribution Name>
```

6. 查看已安装
```
wsl -l或 wslconfig /list
```
5. 卸载
```
wslconfig /u CentOS
```

6. 卸载
右键卸载

## 安装
使用 7-ZIP 或者其他工具解压下载的 appx 文件 ( 比如解压到 D:\WSL\Ubuntu ) 然后运行 ubuntu2004.exe 需要等待一两分钟时间来完成安装，安装完成后，系统会提示创建新的用户帐户（及其密码）

- 如果需要使用 root 默认登录可以运行 ubuntu2004.exe config --default-user root

## 修改为国内源
sudo sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
sudo sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
apt-get update

## 服务自启动配置
由于 WSL 并没有 Linux 内核的支持，仅在用户层实现了系统调用的翻译。因此诸如 systemd、cgroup 是无法工作的。 
只能使用 start-stop-daemon 或其他进程守护工具实现服务管理.

- 编辑 vim /etc/init.wsl 文件添加如下内容
```
#! /bin/sh
# Filename: /etc/init.wsl
service nginx start
```

- 开始 -> 运行 中输入 regedit 回车打开注册表编辑器
定位到 计算机\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run 后新建一个 REG_SZ 类型的值，名称随意，数值数据填写以下内容
```
mshta vbscript:CreateObject("WScript.Shell").Run("wsl -d Ubuntu-20.04 -u root bash /etc/init.wsl",0,TRUE)(window.close)

```

- 以后就可以向 /etc/init.wsl 追加服务，实现开启自启动了

