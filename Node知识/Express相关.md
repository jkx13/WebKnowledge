## 修改js监听变化重启express服务(Nodemon模块包)
```
1. 在项目根目录下创建nodemon.json

{
  "restartable": "rs",//重启模式
  "ignore": [".git", ".svn", "node_modules/**/node_modules"],
  "verbose": true,//设置日志输出
  "execMap": { "js": "node --harmony" },//运行服务的后缀名与对应的命令
  "watch": [],//监听哪些文件变化
  "env": { "NODE_ENV": "development" },
  "ext": "js json"//监听指定后缀名
}

2.使用命令
nodemon index.js
```