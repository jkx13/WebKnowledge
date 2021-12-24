## 1、npm或yarm指定淘宝镜像
```
# npm命令
npm config get registry
# yarn命令
yarn config get registry

# npm命令
npm config set registry http://registry.npm.taobao.org/
# yarn命令
yarn config set registry http://registry.npm.taobao.org/

// 继续按照
```

## 如果继续报错,2、安装windows平台编译环境（需要在管理员权限下安装）
```
npm install -g node-gyp
npm install --global --production windows-build-tools 

```
## 3、当然也可在项目目录下临时安装指定node-sass为镜像淘宝

```
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

```