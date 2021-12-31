## 数据双向绑定
在初始化实例时进行双向数据绑定，使用Object.defineProperty()对属性遍历添加 getter/setter 方法，所以属性必须在 data 函数返回对象上存在；

要给绑定的对象代码中动态添加新的属性，则不是响应式的(数据变化而视图不变)，此时需要用到$set方法；

```javascript
this.$set(对象，key,value);
```

### Vue 对数组监测
由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue

解决方案：
使用Vue 重新修改过的操作数组方法（splice/push/filter/map/every/pop/unshift/reduce/reverse/join/sort）
```javascript
vm.items.splice(len);
```
### 对象添加新属性不会触发更新视图
Object.assign() 或 _.extend() 方法来添加属性
