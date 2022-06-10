## 上传大小配置

### client_max_body_size
- client_max_body_size 默认 1M，表示 客户端请求服务器最大允许大小;
- 请求的正文数据大于client_max_body_size，HTTP协议会报错 413 Request Entity Too Large

### client_body_buffer_size
- 请求的数据小于client_body_buffer_size直接将数据先在内存中存储
- 请求的值大于client_body_buffer_size小于client_max_body_size，就会将数据先存储到临时文件中
- client_body_temp 指定的路径中，默认该路径值是/tmp/.
- 配置的client_body_temp地址，一定让执行的Nginx的用户组有读写权限（否则写进临时文件失败会报错。）

### 注意
```
设置 client_max_body_size client_body_buffer_size相同的值，这样就不会存储临时文件，直接存储在内存了
```