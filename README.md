# miniprogram
## 相关的笔记
### setData
用setData设置往data里面增加动态的数据
### 条件判断
wx:if
wx:else
### 循环对象
外面可以套一个block的标签去遍历，可以包裹多个子元素进行循环，语义化会比较明确

语法 使用 wx:for="{{ 从data中直接获取要遍历的数组的名字 }}" 默认的子项是item，
也可以用  wx:for-item="item" 去确定他要循环的对象
### 事件
bind:tab="onTap"
onTap:事件的回调函数
tap:事件
bind:捕捉事件

....

### 小程序的路由系统
所谓的路由系统是指从一个页面跳转到另一个页面。小程序有非常多的路由函数可以帮忙跳转页面

wx.redirectTo({url})：关闭当前页面跳转到另外一个页面去，是不能返回的，只不过在新版的小程序中多了一个回到主页的功能

wx:navigateTo 是不会关闭当前页面的，当前页面会被保留在栈里面的

wx:refirectTo 在跳转之后会销毁当前页面
### 事件阻止及冒泡
catch:tap 阻止事件继续冒泡，也就是会触发当前的事件，不会触发父节点

bind:tap： 不会阻止事件冒泡，但是向向上寻找到catch之后就会冒泡结束

### 设置key
我们可以用 wx:key="{{}}" 来设置唯一的key值用于列表渲染性能优化！

### 自定义属性

凡是以data-开头的自定义数据 都会在event的currentTarget的data下显示

注意

```md
1.建议使用-连接，如：data-post-id,在dataset下会显示为postId（会自动去除data-）；
2.所有的大写字母在dataset下会自动转换为小写；（不建议在wxml里面使用大写）
```

### 小程序的缓存机制

```md
小程序缓存类似于前端数据库
* 缓存：小程序提供了内置的Api，wx.setStorateSync('key'变量名, data值) 同步操作。
* 新增缓存：wx.setStorateSync('flag', true) 
* 修改缓存：wx.setStorateSync('flag', false) 
* 删除缓存：wx.clearStorageSync()
* 清空缓存：wx.removeStorageSync('flag')
* 读取缓存：const flag = wx.getStorageSync('flag')
```

```md
* 异步获取缓存，建议同步获取
wx.setStorageSync('flag', 2);
const flag = wx.getStorage({
	key:"flag",
});
console.log(flag)
```





