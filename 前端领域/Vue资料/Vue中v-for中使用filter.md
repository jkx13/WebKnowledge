## 1.使用过滤器作为方法
```
<li v-for="item in $options.filters.limitArray(items, 3)">

```
## 2. 使用方法
```
  <li v-for="item in limitArray(items,3)">...</li>

methods:{
     limitArray (arr, length = 3) {
     if (arr && arr.length) {
    if (length == -1) {
        return arr;
    }
    if (length > arr.length) {
        return arr;
    }

    return arr.slice(0, length);
      }

       return null;
  }
```