## 打开命令终端当前目录
```
start .
```

## ipconfig使用
- “ipconfig /release”是释放本机现有IP
- “ipconfig /renew”是向DHCP服务器（可以简单理解成你家的路由器）重新申领一个IP
- “ipconfig /all”是显示完整版IP信息。

## net user 
查看本地用户

## net share
查看所有已共享资源
- 删除共享
net share 要删除的共享文件夹 /delete

## 检查网站IP地址
```
nslookup 网站地址
```

## 查看WiFi配置信息
```
netsh wlan show
```

## 复制命令内容（| clip）
```
ipconfig | clip
```