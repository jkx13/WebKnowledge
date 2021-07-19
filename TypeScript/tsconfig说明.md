## compilerOptions 属性作用是配置编译选项
```json
{
  // ...
  "compilerOptions": {
    "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
    "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
    "diagnostics": true, // 打印诊断信息 
    "target": "ES5", // 目标语言的版本
    "module": "CommonJS", // 生成代码的模板标准
    "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
    "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
    "allowJS": true, // 允许编译器编译JS，JSX文件
    "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
    "outDir": "./dist", // 指定输出目录
    "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
    "declaration": true, // 生成声明文件，开启后会自动生成声明文件
    "declarationDir": "./file", // 指定生成声明文件存放目录
    "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
    "sourceMap": true, // 生成目标文件的sourceMap文件
    "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
    "declarationMap": true, // 为声明文件生成sourceMap
    "typeRoots": [], // 声明文件目录，默认时node_modules/@types
    "types": [], // 加载的声明文件包
    "removeComments":true, // 删除注释 
    "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
    "noEmitOnError": true, // 发送错误时不输出任何文件
    "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
    "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
    "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
    "strict": true, // 开启所有严格的类型检查
    "alwaysStrict": true, // 在代码中注入'use strict'
    "noImplicitAny": true, // 不允许隐式的any类型
    "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
    "strictFunctionTypes": true, // 不允许函数参数双向协变
    "strictPropertyInitialization": true, // 类的实例属性必须初始化
    "strictBindCallApply": true, // 严格的bind/call/apply检查
    "noImplicitThis": true, // 不允许this有隐式的any类型
    "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
    "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
    "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
    "noImplicitReturns": true, //每个分支都会有返回值
    "esModuleInterop": true, // 允许export=导出，由import from 导入
    "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
    "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": { // 路径映射，相对于baseUrl
      // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
      "jquery": ["node_modules/jquery/dist/jquery.min.js"]
    },
    "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
    "listEmittedFiles": true, // 打印输出文件
    "listFiles": true// 打印编译的文件(包括引用的声明文件)
  },
  "rules": {
    // TS特性
    "member-access": true, // 设置成员对象的访问权限（public,private,protect)
    "member-ordering": [// 设置修饰符顺序
      true,
      {
        "order": [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "no-empty-interface":true,// 不允许空接口
    "no-parameter-reassignment":true,// 不允许修改方法输入参数
    "prefer-for-of":true,// 如果for循环中没有使用索引，建议是使用for-of
  
    // 功能特性
    "await-promise":true,// 不允许没有Promise的情况下使用await
    "curly":true,// if/for/do/while强制使用大括号
    "forin":true,// 使用for in语句时，强制进行hasOwnProperty检查
    "no-arg":true,// 不允许使用arguments.callee
    // "no-bitwise":true, // 不允许使用特殊运算符 &, &=, |, |=, ^, ^=, <<, <<=, >>, >>=, >>>, >>>=, ~
    "no-conditional-assignment":true,// do while/for/if/while 语句中将会对例如if(a=b)进行检查
    // "no-console":true,// 不允许使用console对象
    "no-debugger":true,// 不允许使用debugger
    "no-duplicate-super":true,// 不允许super() 两次使用在构造函数中
    "interface-name" : [true, "never-prefix"],
    "no-empty":true,// 函数体不允许空
    "no-eval":false,// 不允许使用eval
    "no-for-in-array":true,// 不允许对Array使用for-in
    "no-invalid-template-strings":true,// 只允许在模板字符串中使用${
    "no-invalid-this":false,// 不允许在class之外使用this
    "no-null-keyword":true,// 不允许使用null,使用undefined代替null，指代空指针对象
    "no-sparse-arrays":true,// 不允许array中有空元素
    "no-string-throw":true,// 不允许throw一个字符串
    "no-switch-case-fall-through":true,// 不允许case段落中在没有使用breack的情况下，在新启一段case逻辑
    "no-unsafe-finally":true,// 不允许在finally语句中使用return/continue/break/throw
    "no-unused-expression":true,// 不允许使用未使用的表达式
    "no-use-before-declare":true,// 在使用前必须声明
    "no-var-keyword":true,// 不允许使用var
    "radix":true,// parseInt时，必须输入radix精度参数
    "restrict-plus-operands":true,// 不允许自动类型转换，如果已设置不允许使用关键字var该设置无效
    "triple-equals":true,// 必须使用恒等号，进行等于比较
    "use-isnan":true,// 只允许使用isNaN方法检查数字是否有效
  
    // 维护性功能
    "indent":[true, "spaces", 4],// 每行开始以4个空格符开始
    "linebreak-style":["off","windows"],// 换行符格式 CR/LF可以通用使用在windows和osx
    // "max-classes-per-file":[true,1],// 每个文件中可定义类的个数
    "max-file-line-count":[true,1000],// 定义每个文件代码行数
    "max-line-length":[false,120],// 定义每行代码数
    "no-default-export":true,// 禁止使用export default关键字，因为当export对象名称发生变化时，需要修改import中的对象名。https://github.com/palantir/tslint/issues/1182#issue-151780453
    "no-duplicate-imports":true,// 禁止在一个文件内，多次引用同一module
  
    // 格式
    "align":[true,"parameters","arguments","statements","members","elements"],// 定义对齐风格
    "array-type":[true,"array"],// 建议使用T[]方式声明一个数组对象
    "class-name":true,// 类名以大驼峰格式命名
    "comment-format":[true, "check-space"],// 定义注释格式
    "encoding":true,// 定义编码格式默认utf-8
    "import-spacing":true,// import关键字后加空格
    "jsdoc-format":true,// 注释基于jsdoc风格
    "new-parens":true,// 调用构造函数时需要用括号
    "no-consecutive-blank-lines":[true,2],// 不允许有空行
    "no-trailing-whitespace": [// 不允许空格结尾
      true,
      "ignore-comments",
      "ignore-jsdoc"
    ],
    "no-unnecessary-initializer":true,// 不允许没有必要的初始化
    "variable-name":[false,"check-format",// 定义变量命名规则
      "allow-leading-underscore",
      "allow-trailing-underscore",
      "ban-keywords"]
  }
}




```