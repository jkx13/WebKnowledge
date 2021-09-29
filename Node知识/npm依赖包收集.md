## slash 
转化window反斜线 foo\\bar => foo/bar
```javascript
import path from 'path'
import slash from 'slash'

const strPath = path.join('foo','bar')
// Unix => foo/bar
// Windows => foo\\bar

slash(strPath)
//Unix => foo/bar
//Windows => foo/bar
```

## nzh
数字转中文
```javascript
var nzhcn = Nzh.cn;                 // 使用简体中文,  另外有 Nzh.hk -- 繁体中文

nzhcn.encodeS(100111);              // 转中文小写 >> 十万零一百一十一
nzhcn.encodeB(100111);              // 转中文大写 >> 壹拾万零壹佰壹拾壹
nzhcn.encodeS("1.23456789e+21");    // 科学记数法字符串 >> 十二万三千四百五十六万万七千八百九十万亿
nzhcn.toMoney("100111.11");         // 转中文金额 >> 人民币壹拾万零壹佰壹拾壹元壹角壹分
```

## qs
添加了一些安全性的查询字符串解析和字符串化库
```javascript
var qs = require('qs');
var assert = require('assert');

var obj = qs.parse('a=c');
assert.deepEqual(obj, { a: 'c' });

var str = qs.stringify(obj);
assert.equal(str, 'a=c');

```

## memoize-one
仅缓存最近参数结果的记忆库。
```javascript
// memoize-one uses the default import
import memoizeOne from 'memoize-one';

const add = (a, b) => a + b;
const memoizedAdd = memoizeOne(add);

memoizedAdd(1, 2); // 3

memoizedAdd(1, 2); // 3
// Add function is not executed: previous result is returned

memoizedAdd(2, 3); // 5
// Add function is called to get new value

memoizedAdd(2, 3); // 5
// Add function is not executed: previous result is returned

memoizedAdd(1, 2); // 3
// Add function is called to get new value.
// While this was previously cached,
// it is not the latest so the cached result is lost
```

## chai断言库
```javascript
var chai = require('chai');  
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

```