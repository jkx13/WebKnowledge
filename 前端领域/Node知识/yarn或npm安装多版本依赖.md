## 使用npm的别名，安装不同版本的库

```
npm install -save antd-v4@npm:antd@next
```

## 与其他版本共存
```
"antd": "^3.13.0",
"antd-v4": "npm:antd@next",
```

## 引入
```
import {Button} from 'antd';
import {Button2 as Button} fom 'antd-v4'
```