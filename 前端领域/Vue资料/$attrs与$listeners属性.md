## vm.$attrs
- 包含了**父组件**作用域中**不作为 prop 被识别** (且获取) 的 attribute 绑定 (class 和 style 除外)。
- 当一个**子组件没有声明任何 prop 时**，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 **v-bind="$attrs" 绑定到孙子组件中**
```javascript
//父组件中
<children name="name"></children>

//子组件中  $attrs 的值就是 { "name": "name" }，这样我们就可以利用这个特性实现组件的属性透传
<sun v-bind="$attrs"></sun>
```

## vm.$listener
- 包含了**父组件**作用域中的 (不含 .native 修饰器的)** v-on 事件监听器**
- v-on="$listeners" 传入子组件中的孙子组件内部组件