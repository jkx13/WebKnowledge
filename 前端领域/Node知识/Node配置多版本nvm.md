## 1. 安装[nvm windows](https://github.com/coreybutler/nvm-windows/releases)
github上下载nvm-setup.zip并解压安装exe

## 2.按照配置
需指定本地nodejs安装目录

## 3. 常用命令
```shell
nvm list　　//查看目前已经安装的版本

nvm list available //显示可下载版本的部分列表

nvm install 10.15.0 //安装指定的版本的nodejs

nvm use 10.15.0 //使用指定版本的nodejs

```
## 4.注意事项（安装nodejs版本后npm没有安装）
可修改nvm安装目录下的setting.txt文件添加如下(*_mirror对应的两行):
```
root: D:\nvm
path: D:\myNode
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```