## fetch使用post 方式下载

```javascript
fetch(url, {
	method: 'POST',
	body: JSON.stringify({
		name: 'jk',
	}),
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
	}
}).then(function(response) {
	let filename = '';
	console.log('response', response);
	try {
		// eslint-disable-next-line prefer-destructuring
		filename = response.headers.get('Content-Disposition').split(';')[1].split('=')[1];
		filename = decodeURIComponent(filename);
	} catch (e) {
		console.log('error', e);
	}
	response.blob().then(blob => {
		const link = document.createElement('a');
		link.style.display = 'none';
		if (filename) {
			link.download = filename;
		}
		link.href = URL.createObjectURL(blob);
		document.body.appendChild(link);
		link.click();
		URL.revokeObjectURL(link.href);
		document.body.removeChild(link);
	});
});

```

## get 方式请求下载
```javascript
let url = http://xxx?name=jk&age=18
window.location.href = url;
window.open(url,'_self');
```

## post方式请求下载
原理： 创建一个隐藏form表单，通过form表单的提交刷新功能，实现下载。代码如下：
```javascript

  // 导出excel
   function postExcelFile(params, url) {
      //params是post请求需要的参数，url是请求url地址
      var form = document.createElement("form");
      form.style.display = "none";
      form.action = url;
      form.method = "post";
      document.body.appendChild(form);
    // 动态创建input并给value赋值
      for (var key in params) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = params[key];
        form.appendChild(input);
      }
      form.submit();
      form.remove();
   }

    //调用
	postExcelFile(
		{ currentPage: 2, pageSize: 20 },
		'url/xxxxxxx/'
	  );
```