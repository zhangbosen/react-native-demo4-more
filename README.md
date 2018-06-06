# 安卓跑步起来，因为没有放置相应的图片资源
# 轮播图（App.js组件实现的是自己写的轮播图）
# components文件夹下的组件每个都是独立的，在根目录下的入口文件index.js中做相应的导入导出即可查看效果：
  Lv组件是展示酒的一个列表；
  Lv1组件是一个使用ListView实现的一个九宫格（关键是使用ListView的属性 contentContainerStyle 设置样式）
  Test组件是 模拟下拉刷新请求数据， 每次下拉新增5条数据（技术点：使用ScrollView组件，具体看代码）
