## 配置说明

### curd配置
```javascript
<avue-crud :option="option"    //表格配置属性             
               :table-loading="loading"    //表格等待框的控制，加载的时候转圈圈，设置true/false
               :search.sync="search"  //搜索的变量(需要sync修饰符)
                :visible.sync="changeInfo" //是否显示，设置true/false
               :data="data"  //表格显示的数据
               :page.sync="page"    //表格分页配置选项(需要sync修饰符)
               :permission="permissionList"  //权限控制
               :before-open="beforeOpen"    //打开前的回调function(file,column)
               v-model="form"               //数据模型 用来存取页面值的 
               ref="crud"  //在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
               @cell-click="pageto"         //表格点击运行方法 onclick方法定义
               @row-update="rowUpdate"
               @row-save="rowSave"          //新增数据后点击确定触发该事件
               @row-del="rowDel"            //行数据删除时触发该事件
               @row-click="handleRowClick"   //单击行运行的方法
               @search-change="searchChange"
               @search-reset="searchReset"  
               @selection-change="selectionChange"
               @current-change="currentChange" //点击页码会调用current-change方法回调当前页数，返回当前第几页
               @size-change="sizeChange"      //点击每页多少条会调size-change方法回调
               @refresh-change="refreshChange" //点击刷新按钮触发该事件
               @on-load="onLoad">         //打开表格页面的方法，一般用来初始化，返回页面数据

```
## 配置option项
```
{// option
  border: true,//表格是否显示边框
  index: true,///表格是否显示序号
  selection: true,//表格是否显示可选select
  dic:['GRADE','SEX'],//传入需要获取字典的变量，看vuex中的getDic方法
  height:'auto',     //表格高度
	calcHeight: 30,    //表格高度差（主要用于减去其他部分让表格高度自适应）
	tip: false,
	searchShow: true,      //首次加载是否显示搜索
	searchMenuSpan: 4, //搜索按钮长度
	searchSpan:6,      //搜索框长度  最大长度24
	border: true,      //表格边框是否显示
	index: true,       //是否显示序号
	viewBtn: true,     //是否显示查看按钮
	selection: true,
	dialogClickModal: false,
	addBtn:false,      //是否显示添加按钮
	editBtn:false,     //是否显示编辑按钮
	delBtn:false,      //是否显示删除按钮
	excelBtn:false,    //表格导出按钮是否显示
	labelWidth:120,    //表单前面的标题长度
	refreshBtn: false, //表格上面小的 刷新按钮
	columnBtn: false,  //表格上面小的 列表按钮
	searchBtn: false,  //表格上面小的 搜索按钮
	menu: true,        //是否显示操作栏
  column: [
    {
      label: "用户名",//表格的标题
      prop: "username",//表格的key
      width: "150",//表格的宽度
      fixed: true,//是否冻结列
      hide:true,//是否隐藏
      span:12,//表单格栅显示的列
	  order:1,//弹窗里排序
	  searchOrder:1,//搜索头部排序
      type:'select', //select | radio | checkbox | date 默认为text
      visdiplay:true,//表单不显示
      overHidden: true,//超出省略号显示
      dicData: 'GRADE', //传入需要引用的字典
	addDisplay: false,   //新增时是否显示
	editDisplay: false,  //编辑时是否显示
	viewDisplay: true,   //详情时是否显示
	hide: true,          //表单查询时是否显示
	display: true,       //在查看，新增，编辑页面是否显示
	span: 24,            //24一条数据占一行，8一行3条数据
	addDisabled: true,    //添加的时候不能修改
	editDisabled: true,   //编辑的时候不能修改
	sortable:true,        //排序方式切换，倒序、正序切换
      ],//type的数据字典,当type为：select | radio | checkbox 加载
      dataDetail: val => {
        return `<span class="el-tag">${val}</span>`;;//是否对列表数据处理
      },
      rules: [{ required: true, message: "请输入用户名", trigger: "blur" }] //表单校验规则
	                
    }
}
```