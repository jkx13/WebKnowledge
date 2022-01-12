## vm.$attrs
在使用 props 的方式向子组件传值的时候，子组件没有使用 props 作为接受的话，那么这个属性会自动设置在子组件的最外层的 HTML 标签上。
如果是 class 和 style 的话，会合并最外层标签的 class 和 style。

想继承父组件传入的非 prop 属性，可以使用 inheritAttrs 禁用继承，然后通过 v-bind="$attrs" 把外部传入的非 prop 属性设置给希望的标签上;
想将没有设置 props 的属性自动继承到组件最外层的标签上那么你就需要将 inheritAttrs 这个属性设置为 false，但是这不会改变 class 和 style;

```javascript
//父组件
<test name="name"></test>

//子组件 $attrs 的值就是 { "name": "name" }，这样我们就可以利用这个特性实现组件的属性透传
```

## vm.$listener
一个组件向组件外传值，一种方法就是使用 $emit 向组件外暴露一个事件，然后通过事件方法的参数传值;
$attrs 的一个作用就是可以批量向组件内传值，$listeners批量向组件外传值;
$listeners 实际就相当于上面的多个 $emit;