## wsl命令
[官网](https://docs.microsoft.com/zh-cn/windows/wsl/install)

1. 在管理员 PowerShell 或 Windows 命令提示符中输入此命令
```shell
wsl --install
```

2. 重启计算机来安装运行适用于 Linux 的 Windows 子系统 (WSL) 所需的全部内容。

3. 更改安装的发行版
```shell
wsl --install -d <Distribution Name>
```

4. 查询可用 Linux 发行版列表
```shell
wsl --list --online 或 wsl -l -o
```

5. 初始安装后安装其他 Linux 发行版
```shell
wsl --install -d <Distribution Name>
```

