## 获取配置信息命令
```shell
npm config list
```

## 配置node_global与 node_cache
```shell
npm config set prefix "D:\myNode\node_global"
npm config set cache "D:\myNode\node_cache"
```
## 配置环境变量
修改path中的npm路径为 D:\myNode\node_global

## 配置安装cnpm
```shell
 npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 安装nrm
```
npm install nrm -g

nrm use taobao // 切换淘宝源地址

nrm test npm // 测试请求速度
```