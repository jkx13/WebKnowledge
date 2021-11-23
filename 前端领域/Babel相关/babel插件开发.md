## AST介绍
抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构;

AST不是JS特有的，每个语言的代码都能转换成对应的AST, 并且AST结构的规范也有很多， js里所使用的规范大部分是 estree;
更底层的代码来说，AST就是用来描述代码的好工具;

[ast在线生成](astexplorer.net)

## babel处理过程
code转换为AST -> 处理AST -> AST转换为code(解析 -> 转换 -> 生成)

### 1.解析
通过 parser 把源码转成抽象语法树（AST）
经过两个阶段，分别是词法分析和语法分析。
#### (1). 词法分析
当parse阶段开始时，首先会进行文档扫描，并在此期间进行词法分析。那怎么理解词法分析呢 如果把我们所写的一段code比喻成句子，词法分析所做的事情就是在拆分这个句子。如同 “我正在吃饭” 这句话，可以被拆解为“我”、“正在”、“吃饭”一样, code也是如此。比如: const a = '1' 会被拆解为一个个最细粒度的单词(tokon): 'const', 'a', '=', '1' 这就是词法分析阶段所做的事情。

#### (2). 语法分析
词法分析结束后，将分析所得到的 tokens 交给语法分析， 语法分析阶段的任务就是根据 tokens 生成 AST。它会对 tokens 进行遍历，最终按照特定的结构生成一个 tree 这个 tree 就是 AST。

根据const a = 1 的AST 得到分析最外层是一个VariableDeclaration意思是变量声明，所使用的类型kind是 const, 字段declarations内还有一个 VariableDeclarator[变量声明符] 对象，找到了 a, 1 两个关键字。
```javascript
// const a = 1 的ast
{
  "type": "Program",
  "start": 0,
  "end": 12,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 11,
            "value": 1,
            "raw": "1"
          }
        }
      ],
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```

用到 babel 提供的解析器 @babel/parser，之前叫 Babylon，它并非由babel团队自己开发的，而是基于fork的 acorn 项目。

### 2. 转换（transform）
在 parse 阶段后，我们已经成功得到了AST。babel接收到 AST后，会使用 @babel/traverse 对其进行深度优先遍历，插件会在这个阶段被触发，以vistor 函数的形式访问每种不同类型的AST节点。

以下面代码为例, 我们可以编写 VariableDeclaration 函数对 VariableDeclaration节点进行访问，每当遇到该类型节点时都会触发该方法;

```javascript
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default

const ast = parser.parse('const a = 1');

traverse(ast, {
    VariableDeclaration(path, state) {
        // 处理
        console.log('path=', path);
        console.log('state=', state);
    }
})

```
接收两个参数
#### (1)path
path为当前访问的路径, 并且包含了节点的信息、父节点信息以及对节点操作许多方法。可以利用这些方法对 ATS 进行添加、更新、移动和删除等等。

#### (2)state
state包含了当前plugin的信息和参数信息等等，并且也可以用来自定义在节点之间传递数据。

### 3. 生成（generate）
generate：把转换后的 AST 打印成目标代码，并生成 sourcemap

这个阶段就比较简单了， 在 transform 阶段处理 AST 结束后，该阶段的任务就是将 AST 转换回 code, 在此期间会对 AST 进行深度优先遍历，根据节点所包含的信息生成对应的代码，并且会生成对应的sourcemap。

## 开发babel插件

[](https://mp.weixin.qq.com/s/Lb5joDZv996HXPY0GIhtdw)
有三种导入方式 named 、 default、 namespaced, 此设计参考 babel-helper-module-imports[4]
- named 对应 import { a } from "b" 形式
- default 对应 import a from "b" 形式
- namespaced 对应 import * as a from "b" 形式