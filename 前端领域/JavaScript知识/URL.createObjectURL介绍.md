## 什么是URL.createObjectURL
- URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。
- 这个 URL 的生命周期和创建它的窗口中的 document 绑定。
- 这个新的URL 对象表示指定的 File 对象或 Blob 对象。

简单的理解一下就是将一个file或Blob类型的对象转为UTF-16的字符串，并保存在当前操作的document下。

## URL.createObjectURL()与FileReader.readAsDataURL()对比
### 1. 返回值
- FileReader.readAsDataURL(file)可以得到一段base64的字符串。
- URL.createObjectURL(file)可以得到当前文件的一个内存URL。

### 2. 内存使用
- FileReader.readAsDataURL(file)的返回值是转化后的超长base64字符串(长度与要解析的文件大小正相关)。
- URL.createObjectURL(file)的返回值虽然是字符串，但是一个url地址。

### 3. 内存清理
- FileReader.readAsDataURL(file)依照JS垃圾回收机制自动从内存中清理。
- URL.createObjectURL(file)存在于当前doucment内，清除方式只有unload()事件或revokeObjectURL()手动清除 。

### 4. 执行机制
- FileReader.readAsDataURL(file)通过回调的形式返回，异步执行。
- URL.createObjectURL(file)直接返回，同步执行。

### 5. 兼容性
兼容性兼容IE10以上，其他浏览器均支持。

### 6. 针对多个文件
- FileReader.readAsDataURL(file)当多个文件同时处理时，需要每一个文件对应一个新的FileReader对象。

- URL.createObjectURL(file)依次返回无影响。

### 总结
- URL.createObjectURL(file)得到本地内存容器的URL地址，方便预览，多次使用需要注意手动释放内存的问题，性能优秀。
- FileReader.readAsDataURL(file)胜在直接转为base64格式，可以直接用于业务，无需二次转换格式。

## base64 转 blob
```javascript
function dataURLtoBlob(dataurl) {
	// 注: atob() 方法用于解码使用 base-64 编码的字符串。
	// base-64 编码使用方法是 btoa() 
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

```