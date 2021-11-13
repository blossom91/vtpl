#百度媒体直播前端 REACT 多页面应用

## Dev Setup

```bash
# 忽略本地个人配置文件
git update-index --assume-unchanged .config/project.config.js
# 取消忽略
git update-index --no-assume-unchanged .config/project.config.js

# 安装push依赖(fis3建议全局安装)
npm i -g fis3

# 安装项目依赖
npm install

# 启动dev
npm run dev

# 打包
npm run build

```

## 线下环境 push

```
# [xx] fis-conf.js 文件内配置的 recieverMap key  (push开发机环境 依赖fsr支持)
sh push-otp.sh [xx]
```

## 交付说明

-   在合并到 master 上线后把开发分支删掉

## 监控与统计

-   [百度统计](https://tongji.baidu.com/web/homepage/index)
-   [Monitor](http://monitor.baidu.com/pub/index#/manageitems)
