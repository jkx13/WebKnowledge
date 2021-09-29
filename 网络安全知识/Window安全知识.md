## shutdown bat命令
```bat
shutdown -s -t 100 //100秒后关机

shutdown -a //放弃关机
```

## msgbox vbs脚本
```vbs
do
msgbox "hello"
loop
//放入window中的启动文件目录中，会一直启动
```

## 制作蓝屏
```bat
ntsd -c q -pn winlogon.exe
```

## 执行文件用txt打开
```
assoc .exe=txtfile
```