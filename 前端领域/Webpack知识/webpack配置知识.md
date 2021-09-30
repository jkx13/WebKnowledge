## 环境变量设置

#### 1.webpack.DefinePlugin插件
```javascript
const webpack = require('webpack')
//webpack.definePlugins本质上是打包过程中的字符串替换
new webpack.DefinePlugin({
	process.env.RUN_NAME:JSON.stringify('development')// '"development"'
})

```

#### 2.构建命令使用env
```
//根据不同的构建命令
npx webpack --env global=src --env production --progress --config ./webpack.config.js

const path = require('path')

module.exports = (env)=>{
	console.log('global:',env.global)//src
	console.log('production:',env.production)//true
	
	return {
		entry:'./src/index.js',
		output:{
			filename:'bundlle.js',
			path:path.resolve(__dirname,'dist')
		}
	}
}
```

#### 3.注入运行时的环境变量
```
npm install --save-dev cross-env

{"build":"cross-env RUN_ENV=production webpack --config ./webpack.config.js"}

console.log(process.env.RUN_ENV)//production
```

## path.join 与 path.resovle区别
```
1. path.join会进行字符串拼接成一个路径（如果有非字符串会报错)
2. path.resolve通过类似 cd xxx 到每一项 ,最后pwd 为返回路径
```