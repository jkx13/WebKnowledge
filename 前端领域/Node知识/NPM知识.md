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

## nrm与yrm 用于切换源
```
nrm ls 或 yrm ls
```

使用切换源
```
nrm use taobao 或 yrm use taobao  或 npm config set registry https://registry.npmjs.org
```

## 登录npm
```
npm login 

//查询当前人
npm whoami

```

## 查看包文档
```
npm docs [package-name]  
// 搜索 homepage 或repository
```

## 查看某个包的所有历史版本
```
npm v [package-name] versions

```

## 也可以做一个软链指向当前需要调试的项目(全局)
```
npm link

// # 然后切换到你要安装本地调试包的项目中，执行👇，即可将本地包安装到项目依赖中

npm link <package-name>

// # 项目中取消安装本地的调试包👇
npm unlink <package-name>
```

## 记得每次发布前，修改下版本号！
```
npm version [版本号]

```

## 然后当前目录执行npm publish就好了
```
npm publish

```


## 将弃用消息改为空字符串即可
npm deprecate package-name ""

## 取消发布（危险操作）
取消发布包后，以相同名称重新发布将被阻止 24 小时。如果您错误地取消发布了一个包，我们建议您以不同的名称再次发布，或者对于未发布的版本，增加版本号并再次发布。

```
npm unpublish [package-name] -f
取消发布包的指定版本
npm unpublish [package-name]@<version>
```

## 审计项目中所有包的安全漏洞
```
npm audit
# 这个命令依赖 package-lock.json 文件,所以如果你用的是yarn需要使用下面的命令
yarn audit

npm token list

```

|hahh		|hah					|
|-|-|
|Critical	|需要立即解决的!		|
|High		|需要尽快解决!			|
|Moderate	|在时间允许的情况下解决	|
|Low		|随便你,不慌不燥不急不忙|


## 检测一下当前镜像源的延迟
```
npm ping

```

## node 与 npm 问题检测
```
npm doctor

```