## Mac中环境配置
1. vim ~/.bash_profile
2. 编辑写入
```
alias python="/Library/Frameworks/Python.framework/Versions/3.8/bin/python3.8"
PATH="/Library/Frameworks/Python.framework/Versions/3.8/bin:${PATH}"
export PATH

```

3. source ~/.bash_profile
4. 运行:python