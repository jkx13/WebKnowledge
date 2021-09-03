## npm ci用户自动部署/测试平台
```
1.项目下必须有package.lock.json或npm-shrinkwrap.json

2.只能安装整个项目

3.运行会检查node_module目录存在则删除

4.基本是按照package.lock固定安装(发现package.json与package.lock.json不同，报错会显示错误)
```

## npm依赖包版本号~ 与 ^
```
1. ~是最小补丁版本依赖包更新，比如 ~1.0.1会匹配所有1.0.x版本，不包括1.1.x等

2. ^会匹配至功能性版本依赖包更新，比如^1.0.1会匹配所有1.x.x的版本，包括1.1.x但不包括2.0.0以上
3. *会安装最新版本
```