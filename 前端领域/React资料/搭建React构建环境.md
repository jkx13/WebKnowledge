[](https://juejin.cn/post/6860129883398668296#heading-16)
[](https://juejin.cn/post/6860134655568871437#heading-0)
# 从零搭建Typescript-React项目

## 1.生成package.json
```
npm init -y
```

## 2.配置LICENSE

## 3.增加.gitignore与.npmrc
	[github开源各编程语言](https://github.com/github/gitignore)
	设置项目淘宝镜像源:  registry=https://registry.npm.taobao.org/

## 4.新建README.md

## 5.EditorConfig
```javascript
//使用Ctrl+Shift+P 输入Generate .editorconfig

# EditorConfig is awesome: https://EditorConfig.org
#indent_style ：缩进风格，可选配置有 tab 和 space
#indent_size ：缩进大小，可设定为 1-8 的数字
#charset ：编码格式，通常都是选 utf-8
#trim_trailing_whitespace ：去除多余的空格，比如你不小心在尾巴多打了个空格，它会给你自动去掉。
#insert_final_newline ：在尾部插入一行，个人很喜欢这个风格，当最后一行代码很长的时候
#end_of_line ：换行符，可选配置有 lf ，cr ，crlf ，会有三种的原因是因为各个操作系统之间的换行符不一致

```

## 6.配置代码风格Prettier
```javascript

tyarn add prettier -D

新建文件 .prettierrc
//可在https://prettier.io/playground/进行配置生成

{
    "arrowParens": "always",
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 80,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": false,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "useTabs": false,
    "vueIndentScriptAndStyle": false,
    "endOfLine": "lf"
}

说明:
trailingComma ：对象的最后一个属性末尾也会添加 ",", 比如 { a: 1, b: 2 } 会格式为 { a: 1, b: 2, } ;
tabWidth ：缩进大小;
semi ：分号是否添加;
singleQuote ：是否单引号;
jsxSingleQuote ：jsx 语法下是否单引号;
endOfLine ：与 .editorconfig 保持一致;
printWidth ：单行代码最长字符长度，超过之后会自动格式化换行;
bracketSpacing ：在对象中的括号之间打印空格， {a: 5} 格式化为 { a: 5 };
arrowParens ：箭头函数的参数无论有几个，都要括号包裹。比如 (a) => {} ，如果设为 avoid ，会自动格式化为 a => {};

安装扩展: Prettier-Code formatter

在项目根目录新建.vscode文件夹，其中新建settings.json
保持.editorconfig与.prettierrc配置一致,内容:
{
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/*.code-search": true
    },
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

```

## 7.安装Typescript与React
```shell
//注：尽量使用npm安装
npm install typescript -D 

npm install react react-dom -S

```
## 8.ESLint配置
```shell
//安装eslint
npm install eslint -D

//执行初始化
npx eslint --init (npx先在本地node_modules找/再全局找/再远程临时下载后找)
//或者使用全局安装
npm install eslint -g
//执行初始化
eslint --init

注：如果之前没有安装typescript会报错：(重启VScode)
Failed to load parser '@typescript-eslint/parser' declared in 'BaseConfig': Cannot find module 'typescript'

// eslint-config-airbnb 开启 React Hooks 的检查，需要在 extends 中添加一项 'airbnb/hooks'
// @typescript-eslint/eslint-plugin 在 extends 中添加 'plugin:@typescript-eslint/recommended' 可开启针对 ts 语法推荐的规则定义

npm install eslint-config-airbnb -D
npm install npm install @typescript-eslint/eslint-plugin  -D

//eslint-plugin-promise 对Promise校验
//eslint-plugin-unicorn 有用的配置项规范

npm install eslint-plugin-promise eslint-plugin-unicorn -D

在.vscode/settings.json中添加以下代码，开启保存时eslint自动修复
{
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "typescript.tsdk": "./node_modules/typescript/lib", // 代替 vscode 的 ts 语法智能提示
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}

添加.eslintignore文件去除相关文件及本身

```
### Eslint与Prettier冲突
```shell
yarn add eslint-config-prettier -D
```

```json
//在.eslintrc.js的extends中: 'prettier'放在原来添加的配置的后面
{
	extends:[
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
		'prettier/unicorn'
	]
}
```

## 9.stylelint配置
[stylelint官网](https://stylelint.io/user-guide/get-started)
```shell
//安装
npm install stylelint stylelint-config-standard -D

//配置根目录.stylelintrc.js 文件
注：/**/*是 glob模式
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-prettier',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-declaration-block-no-ignored-properties',
    ],
    rules: {
        'comment-empty-line-before': null,
        'declaration-empty-line-before': null,
        'function-name-case': 'lower',
        'no-descending-specificity': null,
        'no-invalid-double-slash-comments': null,
        'rule-empty-line-before': 'always',
        indentation: 4,
    },
    ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}

vscode安装插件stylelint

配置.vscode/settting.json中
{
// 使用 stylelint 自身的校验即可
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
}
//stylelint-config-rational-order 用于按照以下顺序将相关属性声明进行分组来对它们进行排序
//1.Positioning   2.Box Model    3.Typography    4.Visual    5.Animation    6.Misc

//stylelint-declaration-block-no-ignored-properties 用于提示我们写的矛盾样式


npm install stylelint-order stylelint-config-rational-order stylelint-declaration-block-no-ignored-properties -D
  如上配置;

```

```shell
//与Prettier冲突
npm install stylelint-config-prettier -D

在.stylelintrc.js的extends中配置
{  
	extends: [
    'stylelint-config-prettier'
  ]
}

```

## 配置命令lint
```
{
	"scripts": {
	        "lint": "yarn run lint-eslint && yarn run lint-stylelint",
	        "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
	        "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}"
	    }
}
```

## 配置lint-staged与husky与 commitlint 
当前husky版本7.0.0，可在查看之前版本不同
[husky官网](https://typicode.github.io/husky/#/?id=automatic-recommended)
```
//lint-staged配置代码格式化与lint校验
//husky 提供commit钩子

npm install husky lint-staged -D



在package.json中配置
{
	  "husky": {
	        "hooks": {
	            "pre-commit": "npx lint-staged",
				"commit-msg": "npx --no-install commitlint --edit $1"//配置
	        }
	    },
	    "lint-staged": {
	        "*.{ts,tsx,js}": [//暂存区后缀为 .ts .tsx .js 的文件进行 eslint 校验
	            "eslint --config .eslintrc.js"
	        ],
	        "*.{css,less,scss}": [
	            "stylelint --config .stylelintrc.js"
	        ],
	        "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
	            "prettier --write"//添加 --write 来使我们的代码自动格式化
	        ]
	    },
}

//commitlint 可以帮助我们进行 git commit 时的 message 格式是否符合规范;
//conventional-changelog 可以帮助我们快速生成 changelog

//安装 commitlint（http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html）
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

//配置.commitlintrc.js
/**
 * build : 改变了build工具 如 webpack
 * ci : 持续集成新增
 * chore : 构建过程或辅助工具的变动
 * feat : 新功能
 * docs : 文档改变
 * fix : 修复bug
 * perf : 性能优化
 * refactor : 某个已有功能重构
 * revert : 撤销上一次的 commit
 * style : 代码格式改变
 * test : 增加测试
 * annotation: 增加注释
 */

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'build',
                'ci',
                'chore',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
                'annotation',
            ],
        ],
    },
}

git commit -m "style:改变样式"

git push origin master

```

### Commitizen是一个撰写合格 Commit message 的工具
```
$ npm install -g commitizen
然后，在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式。
$ commitizen init cz-conventional-changelog --save --save-exact
以后，凡是用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message。

```

### husky生成配置
[husky官网](https://typicode.github.io/husky/#/?id=automatic-recommended)
```
1.开启git hooks
npx husky install
2.install后自动开启git hooks
{
	"script":{
		"prepare": "husky install"
	}
}

3.配置pre-commit 与 commit-msg

npx husky add .husky/pre-commit "npx lint-staged"

npx husky add .husky/commit-msg: "npx --no-install commitlint --edit $1"
```

## 安装React
```
npm install react react-dom -

//配置React类声明
npm install @types/react @types/react-dom -D

```

## 安装babel解析
```
babel-loader使用babel解析
@babel/core babel必须依赖的核心模块
@babel/preset-react 转译jsx


npm install babel-load @babel/core @babel/preset-react -D


//配置.babelrc文件在根目录(presets是插件集合)
//@babel/preset-react是包含：["@babel/plugin-syntax-jsx","@babel/plugin-transform-react-jsx","@babel/plugin-transform-react-display-name"]

//编译ts
npm install @babel/preset-typescript

{
	"presets":["@babel/preset-react","@babel/preset-typescript"]
}

//presets执行顺序是从后往前


```
