## vue父子组件之间双向数据绑定的三种方式

### 一、prop向下传递，emit向上传递

```javascript
//父组件
<template>
	<div>
	<child :value='value' @getChildData='getChildData'></child>
	来自子组件的数据：<span>{{value}}</span>
	<div/>		
</template>
<script>
data() {
	return {
	value: '父组件的数据'
	}
},
methods:{
	getChildData(v){
	this.value = v
	}
}
</script>

//子组件child
	<template>
		<input v-model='childValue' @input='childInputChange'></input>
	</template>
	<script>
	props:{
		value:{
			type:String,//在props接受父组件传递数据
			default:''
		}
	},
	data(){
		return {
			childValue:this.value
		}
	},
	watch:{
		value(){
			this.childValue = this.value //监听父组件的数据，同步更新子组件数据
		}
	},
	methods:{
		childInputChange(){
			this.$emit('getChildData',this.childValue) // 通过emit触发getChildData，将子组件数据传递给父组件
	}
</script>
```


### 二、v2.2.0+ 新增 model通过model属性实现
```javascript
//父组件
<template>
    <div>
        <child v-model='value'></child>
        // 等价于
        <child :value='value' @childValueChange = "val=>{ value = val }"></child>
         父子组件同步的数据：<span>{{value}}</span>
    <div/>
</template>
<script>
data() {
      return {
        value: '父组件的数据'
      }
    }
</script>
​
//子组件child
<template>
    <input type="text" v-model="childValue" @input="childInputChange"/>
</template>
 
<script>
    export default {
        name: "child",
        model: {  // 定义model
            prop: 'fatherValue',  // 父组件v-model绑定的值传递给props中的fatherValue
            event: 'childValueChange'  
            // 通过emit触发childValueChange将内部值传递给父组件v-model绑定的值
        },
        props: {
            fatherValue: String    // 接受父组件传递的值
        },
        data(){
            return {
                childValue: this.fatherValue// 关联值
            }
        },
        methods: {
            childInputChange(){ 
                // 通过$emit触发childValueChange（model内定义）事件，将内部值传递给给父组件
                this.$emit('childValueChange', this.childValue)
            }
        }
    }
</script>

```
 
​
### 三、sync修饰符（v2.3.0+ 新增）
```javascript

// 父组件
<template>
    <div>
        我是父子组件之间同步的数据{{data}}
        <child :data.sync='data'></child>
    </div>
</template>
<script>
    data(){
      return {
        data:'我是来自父组件的数据'
      }
    }
</script>
//子组件
<template>
  <div>
    <input type="text" v-model="childData" @input="childDataChange">
 
  </div>
</template>
 
<script>
    props:{
      data:{
        default:'',
        type:String
      }
    },
    data(){
      return {
        childData:this.data //关联父组件的值
      }
    },
    watch:{
      data(){
        this.childData = this.data
      }
    },
    methods:{
      childDataChange(v){
        this.$emit('update:data',v) // 触发update:data将子组件值传递给父组件
      }
    }
</script>
```