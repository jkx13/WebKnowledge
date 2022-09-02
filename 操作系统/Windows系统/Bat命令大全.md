## bat（批处理文件类型）
注意事项
1.文件保存格式为ANSI（后果：导致中文乱码或执行命令不生效）
2.以管理员身份运行文件（后果：否则无法执行或执行无反应）
3.以ANSI格式保存后执行出现乱码，需要重新再次以ANSI格式保存后然后再次执行

### 关闭或打开回显命令
```
@echo （off|on）

```

### 暂停运行(防止dos窗口关闭)
```
pause


echo 这里是自定义文本！ & pause > nul

```

### 定义变量与使用
```
set 变量名=值

%变量名%
```

### 延迟执行命令
```
@echo off
TIMEOUT /T 5
pause

```

### 输出信息到控制台
```
echo 文本内容
```

### 循环
```
for %%I in (A,B,C) do echo %%I
```

### 调用某个bat文件并执行
call是在当前的命令窗口执行调用的脚本命令，当调用的脚本命令执行完成返回到原先的脚本命令中继续执行（顺序执行无法同时执行）
start是会打开一个新的命令窗口执行脚本中的命令，两个脚本同时执行（实现同时执行）

```
call D:\test.bat
call 文件所在的目录及文件名称
start D:\test.bat
start 文件所在的目录及文件名称
```

### 打开某个文件夹、文件、使用特定的软件打开某个文件
```
start 文件路径/目录
```
使用特定的软件打开某个文件（这里演示的是用Notepad++打开文本文件）
```
start D:\软件\Notepad++7.7.1\notepad++.exe "D:\test.txt"
start 打开文件的应用程序路径及名称 "被打开的文件路径及名称"
```

### 注释rem与(::)
```
rem 格式：echo 文件内容>文件路径

::两个冒号
```

### if与goto
```bat
@echo off
:start
set /p a=
if not %a%==1 (
	echo Please input?
	goto start
) else (
	echo input correct!
)
pause>nul



@echo off
set a=123
set b=abc
set c=12
::/i字符串大小写忽略
if /i %b% equ ABC (
  if %a% geq %c% (
    echo %a%^>=%c%
  ) else (
    echo %a%^<%c%
  )
) else (
  echo %b%不等于ABC
)
pause>nul
```

### rd命令删除文件夹
```bat
@echo off
::删除e:\test op下空文件夹,不为空不能删除
rd "e:\test op"
::删除e:\test9下所有文件夹,不管是否为空,但会询问是否确认删除[Y/N]
rd /s e:\test9
::自定义删除提示信息
echo 是否删除[Y/N]: & rd /s e:\test9>nul
::/s/q联合使用，不会询问直接删除
rd /s/q e:\test9
```

### 切换目录
```bat
::@echo off
::显示当前目录
cd
::切换到根目录
cd\
::盘符加冒号，切换到该盘
d:
::切换到e:hi目录下(目录名不区分大小写)
cd /d e:\hi
::保存当前目录，并切换当前目录为d:\test
pushd d:\test
::恢复当前目录为刚才保存的e:\hi
popd
pause
```

### 上次执行命令结果
当使用 if %errorlevel%==值 cmmand  句式时，它含义是：如果返回的错误码值等于值 的时候，将执行cmmand操作。
一般上一条命令的执行结果返回的值只有两个，"成功"用0 表示 "失败"用 1 表示
```bat
set result=%ERRORLEVEL%

if %result% equ 0 ( echo 1>>createOk ) else ( echo 2>>createfail )
```

### xcope命令复制文件
```bat
@echo off
::将e:\test目录下所有文件(夹)复制到d:\test1
::/e目录下所有文件(夹),/y已存在时直接覆盖
xcopy e:\test d:\test1 /e/y

/P 创建每个目标文件前提示。
　　/S 复制目录和子目录，除了空的。
　　/E 复制目录和子目录，包括空的。 与 /S /E 相同。可以用来修改 /T。
　　/V 验证每个新文件。
　　/W 提示您在复制前按键。
　　/C 即使有错误，也继续复制。
　　/I 如果目标不存在，又在复制一个以上的文件， 则假定目标一定是一个目录。
　　/Q 复制时不显示文件名。
　　/F 复制时显示完整的源和目标文件名。
　　/L 显示要复制的文件。
　　/G 允许将没有经过加密的文件复制到不支持加密的目标。
　　/H 也复制隐藏和系统文件。
　　/R 改写只读文件。
　　/T 创建目录结构，但不复制文件。不包括空目录或子目录。/T /E 包括空目录和子目录。
　　/U 只复制已经存在于目标中的文件。
　　/K 复制属性。一般的 Xcopy 会重设只读属性。
　　/N 用生成的短名复制。
　　/O 复制文件所有权和 ACL 信息。
　　/X 复制文件审核设置(隐含 /O)。
　　/Y 禁止提示以确认改写一个现存目标文件。
　　/-Y 导致提示以确认改写一个现存目标文件。
　　/Z 用重新启动模式复制网络文件。

```

### cope命令复制文件
```bat
@echo off
::将d:\test\test.txt复制到e:\test1\目录下并重命名为test2.txt
::如果test2.txt文件已存在，将自动覆盖
copy d:\test\test.txt e:\test1\test2.txt
::将e:\test该层目录下所有文件复制到d:\test1\test3文件夹下
::前提d:\test1\test3文件夹必须已存在
::相同文件名的文件会被覆盖
copy e:\test d:\test1\test3
```

### net user 
查看本机账户情况

### net share
查看共享

### nslookup
检查IP地址

