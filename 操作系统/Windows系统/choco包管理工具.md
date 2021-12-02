## choco包管理工具
- Windows 包管理工具，相当于brew（The package manager for Windows）([choco官网](https://chocolatey.org/))

- 所需环境
```
Windows 7+ / Windows Server 2003+
PowerShell v2+
.NET Framework 4+
```

### 1.下载安装
- 在cmd终端下,**注意需要管理员身份运行**(命令提示符显示C:\Windows\system32>)（搜索命令提示符右键管理员运行）
```shell
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

- 在PowerShell 安装
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

### 2. 查看版本
```
choco -v
```

### 3. 常用命令
```
choco upgrade chocolatey 更新choco
choco list -li 查看本地安装的软件
choco search nodejs 查找安装包
choco install sublimetext3 下载
choco uninstall sublimetext3 卸载
choco upgrade sublimetext3 更新（update）
```