## postman向后端发送请求四种方式
1. **form-data**

就是http请求中的multipart/form-data,它会**将表单的数据处理为一条消息**，以标签为单元，用分隔符分开。既可以上传键值对，也可以上传文件。当上传的字段是文件时，会**有Content-Type来说明文件类型**；content-disposition，用来说明字段的一些信息；由于有boundary隔离，所以multipart/form-data既可以上传文件，也可以上传键值对，它采用了键值对的方式，所以可以**上传多个文件**。

**可以看到所有传递的信息被处理成了一条**，并且被**boundary分割**，boundary是随机字符串。用来校检数据。

2. x-www-form-urlencoded
就是application/x-www-from-urlencoded,会将表单内的数据转换为键值对，当模拟表单上传数据时，用此选项，但当然此表单不能上传文件，只能是文本格式，要上传文件，使用上面的格式。比如,name=test&age=10
即是 Content-Type: application/x-www-from-urlencoded

#### multipart/form-data与x-www-form-urlencoded区别：
- multipart/form-data：既可以上传文件等二进制数据，也可以上传表单键值对，只是最后会转化为一条信息；
- x-www-form-urlencoded：只能上传键值对，并且键值对都是间隔分开的。


3. raw
可以上传任意格式的文本，可以上传text、json、xml、html等，其实主要的还是传递json格式的数据，当后端要求json数据格式的时候，就要使用此种格式来测试。

4. binary
相当于Content-Type:application/octet-stream,从字面意思得知，只可以上传二进制数据，通常用来上传文件，由于没有键值，所以，一次只能上传一个文件。这个不是很常用，了解即可。


