## npm 与yarn对比
|作用|npm|Yarn
|-|-|-|
|安装|	npm install(i)|	yarn
|卸载|	npm uninstall(un)|	yarn remove
|全局安装|	npm install xxx –-global(-g)|	yarn global add xxx
|安装包|	npm install xxx –save(-S)	|yarn add xxx
|开发模式安装包|	npm install xxx –save-dev(-D)|	yarn add xxx –dev(-D)
|更新|	npm update –save|	yarn upgrade
|全局更新|	npm update –global|	yarn global upgrade
|卸载|	pm uninstall [–save/–save-dev]|	yarn remove xx
|清除缓存|	npm cache clean	|yarn cache clean
|重装|	rm -rf node_modules && npm install|yarn 


## 配置镜像
```
npm install -g cnpm --registry=https://registry.npm.taobao.org

```

## 查看当前package模块版本号
```
npm list xxx
```

## 验证 node_modules 中已安装的文件没有被移除
```
yarn install --check-files
```

## 重新拉取所有包，即使之前已经安装的
```
npm install --force
```

### 不执行项目 package.json 及其依赖定义的任何脚本（比较重要，vue 项目有时会用到）
```
yarn install --ignore-scripts
```

## 不生成 yarn.lock 文件
```
yarn install --pure-lockfile
```

## 不生成 yarn.lock 文件，并且，如果需要更新则报错
```
yarn install --frozen-lockfile
```

## 当与对应包的校验不一致时， 更新 yarn.lock 文件和已安的依赖装包
```
yarn install --update-checksums
```