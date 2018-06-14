# vue-webpack-all

一份配置搞定 vue 单页面与多页面项目

### 说明

1.  添加了大量的说明,去除了不必要的功能与命令
2.  删除了目录*static*与插件*copy-webpack-plugin*
3.  删除*config*目录 将变量设置*config/index.js*改名为*config.js*并移入*build*目录
4.  将*check-versions.js*合并到*build.js*
5.  将*vue-loader.conf.js*合并到*webpack.base.conf.js*
6.  大量使用了*postcss*插件 用来解决 1px 问题与兼容问题 具体 [如何在 Vue 项目中使用 vw 实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
7.  整合了单页面应用与多页面应用
    *   *config.js*中`singlePage`可设置是否单页面应用`true`与`false`
    *   多页面项目时`moduleName`可设置根目录 默认为`page`
    *   `dev`环境默认关闭自动打开页面,服务启动后会打印启动页面,点击打开
8.  目前暂不采用 vw 方案 继续 rem 方案解决移动适配问题
9.  项目使用*vue*与*less*
10. 默认使用 ui 模板为 iPhone7 `375`宽度 `1rem = 100px`,非移动端项目请注销`common.js`内移动端相关代码
11. 参考normal.css与常用选项配置了一份初始化css
