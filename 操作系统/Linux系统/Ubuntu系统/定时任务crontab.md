## crontab命令 
是用来让使用者在固定时间或固定间隔执行程序之用，换句话说，也就是类似使用者的时程表。
-u user 是指设定指定 user 的时程表，这个前提是你必须要有其权限(比如说是 root)才能够指定他人的时程表。
如果不使用 -u user 的话，就是表示设定自己的时程表。
cron crontab命令 在Linux中的的内置服务，但它不自动起来，可以用以下的方法启动、关闭这个服务：

```shell
/sbin/service crond start //启动服务  
/sbin/service crond stop //关闭服务  
/sbin/service crond restart //重启服务  
/sbin/service crond reload //重新载入配置
```

```
# crontab基本格式
# +---------------- minute  分钟(0 - 59)
# |  +------------- hour    小时(0 - 23)
# |  |  +---------- day     日期(1 - 31)
# |  |  |  +------- month   月份(1 - 12)
# |  |  |  |  +---- week    星期(0 - 7) (星期天=0 or 7)
# |  |  |  |  |
# *  *  *  *  *  要运行的命令
```
除了数字还有几个个特殊的符号就是”*”、”/”和”-“、”,”，
代表所有的取值范围内的数字， “/”代表每的意思,”/5″表示每5个单位， “-“代表从某个数字到某个数字, “,”分开几个离散的数字。
很多时候，你没有办法重新启动crond，这个时候可以先killall crond 然后再crond restart就哦ok了。我就是这么干的。
你也可以将这个服务在系统启动的时候也自动启动，在/etc/rc.d/rc.local这个脚本的末尾追加一条命令。
echo /sbin/service crond start >> /etc/rc.d/rc.local
现在cron这个服务已经在进程里面了，我们就可以用这个服务了，cron服务提供以下几种接口供大家使用：

1. 直接用crontab命令编辑

	cron服务提供crontab命令来设定cron服务的

	crontab -u //设定某个用户的cron服务，一般root用户在执行这个命令的时候需要此参数
	crontab -l //列出某个用户cron服务的详细内容 　　 
	crontab -r //删除没个用户的cron服务 　　 
	crontab -e //编辑某个用户的cron服务
	比如说root查看自己的cron设置：

	crontab -u root -l
	再例如，root想删除fred用户的cron设置：

	crontab -u fred -r
	在编辑cron服务时，编辑的内容有一些格式和约定，根据crontab的基本格式写。

	编辑root下的定时任务
	crontab -u root -e

	每天早上6点追加一条字符串到一个文本。
	0 6 * * * echo "Good morning." >> /tmp/test.txt

	每两个小时追加一条字符串一个文本。
	0 */2 * * * echo "Have a break now." >> /tmp/test.txt

	晚上11点到早上8点之间每两个小时，早上八点
	0 23-7/2，8 * * * echo "Have a good dream：）" >> /tmp/test.txt

	每个月的4号和每个礼拜的礼拜一到礼拜三的早上11点
	0 11 4 * 1-3 command line

	1月1日早上4点
	0 4 1 1 * command line

	每月每天每小时的第 0 分钟执行一次 /bin/ls
	0 * * * * /bin/ls

	在 12 月内, 每天的早上 6 点到 12 点中，每隔 20 分钟执行一次 /usr/bin/backup
	*/20 6-12 * 12 * /usr/bin/backup

	周一到周五每天下午 5:00 寄一封信给 alex_mail_name :
	0 17 * * 1-5 mail -s "hi" alex_mail_name < /tmp/maildata

	每月每天的午夜 0 点 20 分, 2 点 20 分, 4 点 20 分....执行 echo "haha"
	20 0-23/2 * * * echo "haha"

	晚上11点到早上8点之间每两个小时，早上8点,显示时间
	0 23-7/2，8 * * * date
	每次编辑完某个用户的cron设置后， cron自动在/var/spool/cron下生成一个与此用户同名的文件，此用户的cron信息都记录在这个文件中，这个文件是不可以直接编辑的， 只可以用crontab -e 来编辑。cron启动后每过一份钟读一次这个文件，检查是否要执行里面的命令。因此此文件修改后不需要重新启动cron服务。

	2. 编辑/etc/crontab 文件配置cron

	cron 服务每分钟不仅要读一次/var/spool/cron 内的所有文件，还需要读一次/etc/crontab,因此我们配置这个文件也能运用cron服务做一些事情。

	用crontab配置是针对某个用户的， 而编辑/etc/crontab是针对系统的任务。

此文件的文件格式是：
```
SHELL=/bin/bash 
　　 PATH=/sbin:/bin:/usr/sbin:/usr/bin 
　　 MAILTO=root //如果出现错误，或者有数据输出，数据作为邮件发给这个帐号 
　　 HOME=/ 
　　 # run-parts 
　　 01 * * * * root run-parts /etc/cron.hourly   //每个小时去执行一遍  /etc/cron.hourly内的脚本 
　　 02 4 * * * root run-parts /etc/cron.daily    //每天去执行一遍     /etc/cron.daily内的脚本 
　　 22 4 * * 0 root run-parts /etc/cron.weekly   //每星期去执行一遍    /etc/cron.weekly内的脚本 
　　 42 4 1 * * root run-parts /etc/cron.monthly //每个月去执行一遍   /etc/cron.monthly内的脚本
```
chkconfig crond on设置开机自启动