@echo on
set T='HELLO'
echo %T%

for %%I in (A,B,C) do echo %%I

:: 暂停超时
TIMEOUT /T 2

::if常规用法，注意空格
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