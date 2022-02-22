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

## Webpack中的Sourcemap

- I）eval ： 每一个模块都执行eval()过程，并且会追加//@ sourceURL

- II）eval-source-map：每一个模块在执行eval()过程之后，并且会为每一个模块生成sourcemap文件，生成的sourcemap文件通过DataURL的方式添加

- III）cheap-eval-source-map：跟eval-source-map相同，唯一不同的就是增加了”cheap”，”cheap”是指忽略了行信息。这个属性同时也不会生成不同loader模块之间的sourcemap。

- VI）cheap-module-eval-source-map：与cheap-eval-source-map相同，但是包含了不同loader模块之间的sourcemap

官网的devtool类型都是以组合形式给出的，实际上webpack中的sourcemap的基本类型包括：eval，cheap,moudule，inline,source-map。其他的类型都是根据这5个基本类型组合而来。我们来具体分析一下这5个基本类型:

### eval
eval会将每一个module模块，执行eval，执行后不会生成sourcemap文件，仅仅是在每一个模块后，增加注释 // #sourceURL来关联模块处理前后的对应关系

### soure-map
source-map会为每一个打包后的模块生成独立的soucemap文件;
打包后的模块在模块后面会对应引用一个.map文件，同时在打包好的目录下会针对每一个模块生成相应的.map文件，在上例中会生成一个index.js.map文件，这个文件是一个典型的sourcemap文件;

### inline
与source-map不同，增加inline属性后，不会生成独立的.map文件，而是将.map文件以dataURL的形式插入。
打包好模块后，在sourceMappingURL中直接将.map文件中的内容以DataURL的方式引入。

### cheap
cheap属性在打包后同样会为每一个模块生成.map文件，但是与source-map的区别在于cheap生成的.map文件会忽略原始代码中的列信息。
增加cheap后也不会有loader模块之间对应的sourcemap;
因为webpack最终会将所有的非js资源，通过loader的形式转变成js资源，如jsx转js通过loader。
如果没有loader之间的sourcemap，那么在debug的时候定义到上图中的压缩前的js处，而不能追踪到jsx中。

### module
包含了loader模块之间的sourcemap

### 总结
在开发环境中我们使用：cheap-module-eval-source-map

在生产环境中我们使用：cheap-module-source-map

这里需要补充说明的是，eval-source-map组合使用是指将.map以DataURL的形式引入到打包好的模块中，类似于inline属性的效果，我们在生产中，使用eval-source-map会使打包后的文件太大，因此在生产环境中不会使用eval-source-map。
但是因为eval的rebuild速度快，因此我们可以在本地环境中增加eval属性

## 通过一个 enforce 属性，默认有以下几个值
- 1. pre 优先处理
- 2. normal 正常处理（默认）
- 3. inline 其次处理
- 4. post 最后处理

## oneOf 使用
- 使用oneOf 根据文件类型加载对应的loader，只要能匹配一个即可退出，
- 对于同一类型文件，比如处理js，如果需要多个loader，可以单独抽离js处理，确保oneOf里面一个文件类型对应一个loader
- 可以配置 enforce: 'pre',指定优先执行