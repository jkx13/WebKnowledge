
## gulp3 VS gulp4
	区别Gulp4不是传递一个依赖任务列表
	Gulp3如果有一个任务A，B和C的列表，在一个序列中运行（确保A在B开始之前完成，而B在C开始之前完成），代码如下：
```javascript
gulp.task('a', function () {
  // Do something.
});
gulp.task('b', ['a'], function () {
  // Do some stuff.
});
gulp.task('c', ['b'], function () {
    // Do some more stuff.
});
```

```
不要用Gulp3的方式指定依赖任务，你需要使用gulp.series和gulp.parallel，因为gulp任务现在只有两个参数。
gulp.series：按照顺序执行
gulp.paralle：可以并行计算
```

```javascript
gulp.task('my-tasks', gulp.series('a', 'b', 'c', function(done) {
  // Do something after a, b, and c are finished.
done();
}));

gulp.task('build', gulp.parallel('styles', 'scripts', 'images', function (done) {
  // Build the website.
done();
}));
```
或者这样
```
gulp.task('my-tasks', gulp.series('a', gulp.parallel('styles','scripts', 'images'), 'b', 'c', function(done) {
  // Do something after a, b, and c are finished.
done();//注意这个done不写会报错
/**
gulp4中，必须告诉gulp我们的task任务已经完成了。gulp3中，我们不必要这么做，因为如果没有发出异步完成信号，那么当任务返回时，gulp会认为它已经完成了，gulp4中必须明确指出任务完成了
**/
}));
```
