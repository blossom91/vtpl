<style>
.title {
    position: relative;
}
.head-job {
    font-size: 25px;
    font-weight: 400;
}
.my-link {
    position: absolute;
    right: 0;
    bottom: 7px;
    font-size: 20px;
    font-weight: 400;
}
.my-link a {
    color: #fff;
}
.demo-img {
    width: 80%;
    max-height: 80%;
    margin-left: 10%;
}
.demo2-img {
    width: 450px;
    max-height: 500px;
}
.demo-box {
    display: flex;
    justify-content: space-between;
}
</style>

<template>
    <div id="app">
        <p class="last-modified">最后更新于2019年8月</p>
        <a class="download-pdf" href="resume.pdf">下载 PDF</a>

        <main class="content">
            <!--基本信息-->
            <header class="content-hd">
                <section class="title">
                    <div class="name">
                        <h1>赵航</h1>
                        <h3 class="head-job">前端工程师</h3>
                    </div>
                    <div class="my-link">
                        <a href="https://github.com/blossom91" target="_blank">github</a> |
                        <a href="https://www.jianshu.com/u/f9d190d7cdd5" target="_blank">简书</a>
                    </div>
                </section>
                <section class="info">
                    <ul>
                        <li>男 / 1991 / 14年毕业</li>
                        <li>河南大学民生学院 (土木工程) / 统招本科 </li>
                    </ul>
                </section>
                <section class="contact">
                    <ul>
                        <li>
                            <a href="mailto:252326977@qq.com">
                                <span class="contact-link">blossom@zhfei.cc</span>
                                <span class="iconfont">
                                    <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                                        <path
                                            d="M903.808 239.04l-818.304 0 0 545.92 852.992 0 0-545.92-34.688 0zM869.664 273.152l-329.536 329.536c-15.04 15.04-41.248 15.04-56.288 0l-329.6-329.536 715.392 0zM119.616 286.752l221.536 221.504-221.536 221.536 0-443.072zM146.848 750.848l218.464-218.432 94.432 94.4c13.952 13.952 32.512 21.664 52.256 21.664s38.304-7.712 52.256-21.664l94.432-94.432 218.432 218.432-730.304 0zM904.384 729.824l-221.536-221.568 221.536-221.568 0 443.136z"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:18513121736">
                                <span class="contact-link">18513119219</span>
                                <span class="iconfont">
                                    <svg width="16px" height="16px" viewBox="0 0 1024 1024">
                                        <path
                                            d="M256 1024l512 0c26.464 0 48-21.536 48-48l0-928c0-26.464-21.536-48-48-48l-512 0c-26.464 0-48 21.536-48 48l0 928c0 26.464 21.536 48 48 48zM240 48c0-8.832 7.168-16 16-16l512 0c8.832 0 16 7.168 16 16l0 928c0 8.832-7.168 16-16 16l-512 0c-8.832 0-16-7.168-16-16l0-928zM288 864l448 0c8.832 0 16-7.168 16-16l0-672c0-8.832-7.168-16-16-16l-448 0c-8.832 0-16 7.168-16 16l0 672c0 8.832 7.168 16 16 16zM304 192l416 0 0 640-416 0 0-640zM496 928c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32zM448 128l128 0c8.832 0 16-7.168 16-16s-7.168-16-16-16l-128 0c-8.832 0-16 7.168-16 16s7.168 16 16 16z"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </section>
            </header>
            <div class="content-bd">
                <div class="content-left">
                    <section class="practice">
                        <header class="section-hd">
                            <span class="section-title-l"></span>
                            <h2 class="section-title">个人技能</h2>
                            <span class="section-title-r"></span>
                        </header>
                        <div class="section-bd">
                            <div class="item">
                                <ul class="item-bd">
                                    <li>
                                        精通 Electron 用于开发跨平台桌面程序，了解基于 RPC 的主进程渲染进程通信机制，
                                        对于 Electron 环境下原生模块使用，质量监控，压缩打包，自动更新等实现都有所了解
                                    </li>
                                    <li>
                                        熟练掌握类与⾯向对象的编程思想，理解函数式编程，具备在⼯作中封装、优化、重构项⽬代码的能⼒，
                                        具备良好的编码⻛格
                                    </li>
                                    <li>
                                        熟练掌握 Webpack 原理，实现过 Webpack 核⼼功能，理解 AST 运行机制，对 loader 和
                                        plugin 有深⼊理解，便于扩展前端项目的工具化，提高开发效率
                                    </li>
                                    <li>
                                        熟练掌握 Vue 技术栈及其原理，深度使用 Vue 相关生态，对 Vue 响应式，数据绑定，
                                        render，Diff，createElement等核心功能都有所研究，方便快速开发项目，排查问题
                                    </li>
                                    <li>
                                        理解前端与移动端通信原理，可实现用于两端通信的 Bridge 基础框架，基于 iframe
                                        做降级兼容，Android 基于 addJavascriptInterface，iOS 基于 userContentController
                                        实现更现代化的调用机制，通过 npm 做 Bridge 包管理模块， 提高开发效率
                                    </li>

                                    <li>
                                        掌握 Node、Python 等后端编程语言，熟悉HTTP/TCP网络协议，
                                        能使用Socket实现基本的HTTP server，理解 SSR 基本原理，了解服务端渲染
                                    </li>
                                    <li>
                                        熟悉操作系统基本知识，如寄存器，虚拟机，逻辑门电路，图形渲染展示，
                                        图像压缩，进程，线程，协程等，熟悉基本的 数据结构，了解相应的时间复杂度，
                                        并能实现 链表 栈 队列 哈希表 二叉树等常见结构
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="practice">
                        <header class="section-hd">
                            <span class="section-title-l"></span>
                            <h2 class="section-title">工作经历</h2>
                            <span class="section-title-r"></span>
                        </header>
                        <div class="section-bd">
                            <div class="item">
                                <header class="item-hd">
                                    <h3 class="item-name">北京百度时代网络技术有限公司 (2020.7-至今)</h3>
                                </header>
                            </div>
                            <div class="item">
                               
                                <ul class="item-bd">
                                    <li>
                                        负责 百度App Feed流的开发与维护工作
                                    </li>
                                    <li>
                                        负责 百度App 直播相关业务的开发与维护工作
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section-bd">
                            <div class="item">
                                <header class="item-hd">
                                    <h3 class="item-name">北京与你科技有限公司 (2017.7-2020.6)</h3>
                                </header>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <a href="https://www.uneed.com" target="_blank">与你IM桌面版</a>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        参与并主导与你IM桌面端的开发工作，项目基于 Electron 做跨平台开发
                                    </li>
                                    <li>
                                        基于 Vue 做渲染层处理，Rxjs 做状态管理，SQLite 做数据持久化，Websocket
                                        实现通信机制
                                    </li>
                                    <li>
                                        实现群权限管理，@群成员，文件拖动发送，音视频表情发送，消息撤回，重发，
                                        转发等基本IM功能
                                    </li>
                                    <li>
                                        基于oss实现断点上传与分片下载，实现云端文件音视频播放，实现Electron全量更新与增量更新等自动更新功能
                                    </li>
                                    <li>
                                        基于严格的 eslint
                                        代码规范和模块化管理，保证了良好的代码结构和功能隔离，实现了快速的迭代开发
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>动画编辑器</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        基于 GSAP 动画框架 与 Electron
                                        实现的视图动画编辑工具，方便UI创作基于帧的DOM运动操控动画效果
                                    </li>
                                    <li>
                                        通过实现基础的动画效果函数，可基于时间帧组合创造动画效果，生成 JSON
                                        格式动画效果配置文件
                                    </li>
                                    <li>实现动画配置文件的载入，播放，重播，暂停，调整动画时间，制作gif图等功能</li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>后台管理项目</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        参与设计后台管理系统，实现账号权限系统，根据不同部门人员实现相应功能需求
                                    </li>
                                    <li>
                                        包括自动部署，代码回滚，发布日志，App版本管理，版本灰度管理，用户资料审核，用户数据统计，用户封禁，活动监测，通知管理等各类模块
                                    </li>
                                    <li>项目基于 Vue 渲染层，Vue-Router 路由管理，Iview UI组件库</li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>移动端项目</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        负责与你客户端内嵌的H5项目，包含了钱包，红包，群组小应用，各种功能模块和活动页面的开发工作
                                    </li>
                                    <li>
                                        基于 npm 维护一套仿小程序api的内部 Bridge
                                        封装包，并维护文档的及时更新便于内部各端使用
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>基础工具建设</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        开发内部效率工具 upack，实现客户端更新本地前端项目包，
                                        实现远端项目的打包发布逻辑
                                    </li>
                                    <li>
                                        实现基于 Webpack 构建的前端多环境使用的配置化脚手架工具
                                    </li>
                                    <li>
                                        参与并主导了基于 Docker Drone 部署 gitlab runner 执⾏ CI<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决客户端自动打包，i18n项目自动编译发布，
                                        服务端自动测试等场景需求，提高了客户端打包效率，极大降低服务端发布服务的故障率
                                    </li>
                                    <li>
                                        负责项目需求的沟通与任务分解，安排组内工作进度，协调各端资源，推进项目进度
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section-bd">
                            <div class="item">
                                <header class="item-hd">
                                    <h3 class="item-name">河南东方国际地产开发有限公司 (2014.9-2017.1)</h3>
                                </header>
                            </div>
                            <div class="item">
                               
                                <ul class="item-bd">
                                    <li>
                                        任职项目工程部门,负责CAD施工图的绘制与施工进度和质量的审查工作
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="project">
                        <header class="section-hd">
                            <span class="section-title-l"></span>
                            <h2 class="section-title">业余项目</h2>
                            <span class="section-title-r"></span>
                        </header>

                        <div class="section-bd">
                            <div class="item">
                                <header class="item-hd">
                                    <span>图形学学习</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        基于图形学原理从零实现世界坐标系 模型坐标系 视口坐标系的三维转换，完成各 mesh 的
                                        三维模型渲染
                                    </li>
                                    <li>
                                        实现光栅化渲染，色彩过渡，背面剔除优化与三角形平面模式的光线效果
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>音视频压缩学习</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        基于离散余弦变换做时频域转换，过滤高频信号，基于 LZW 算法实现图片压缩
                                    </li>
                                    <li>
                                        基于图片压缩的基础上，利用关键帧差值计算，实现视频压缩
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="project">
                        <header class="section-hd">
                            <span class="section-title-l"></span>
                            <h2 class="section-title">附项目图片</h2>
                            <span class="section-title-r"></span>
                        </header>
                        <div class="section-bd">
                            <div class="demo-box">
                                <div class="item">
                                    <header class="item-hd">
                                        <span>光线追踪与调试界面</span>
                                    </header>
                                    <img class="demo2-img" src="./img/1.png" alt="" />
                                </div>

                                <div class="item">
                                    <header class="item-hd">
                                        <span>动画编辑器</span>
                                    </header>
                                    <img class="demo2-img" src="./img/5.png" alt="" />
                                </div>
                            </div>
                            <br />
                            <div class="item">
                                <header class="item-hd">
                                    <span>与你桌面端</span>
                                </header>
                                <img class="demo-img" src="./img/desktop.png" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
        <footer class="github-footer">
            <a class="footer-link">Thank you for reading my resume.</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>
