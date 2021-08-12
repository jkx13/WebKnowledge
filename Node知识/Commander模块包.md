## option使用
```javascript
var program = require('commander')

program
    .version('0.0.1', '-v, --version') //自定义版本
    .option('-r,--recursive', 'Remove Recursively') //选项(('简写,全写描述（注意空格）',文本描述,默认值)
    .option('-d,--mkdir <Dir>', 'made Dir', 'file') //全写描述中[]内为可选项<>为必写项内容（注意空格 --mkdir之后）
    .parse(process.argv)

const options = program.opts()
if (options.recursive) {
    console.log('recursive==' + options.recursive)
}

if (options.mkdir) {
    console.log('mkdir==' + options.mkdir)
}

```

## command使用
```

program
    .usage('<command> [option]') //<>必选项，[]可选
    .command('clone <source> [dest]')
    .description('clone a repository')
    .action((source, destination) => {
        //source是命令，参数destination
        console.log(source + '==source  destination==' + destination)
    })
    .parse(process.argv)
```