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
        <p class="last-modified">最后更新于2024年1月</p>
        <a class="download-pdf" href="resume.pdf">下载 PDF</a>

        <main class="content">
            <!--基本信息-->
            <header class="content-hd">
                <section class="title">
                    <div class="name">
                        <h1>赵航</h1>
                        <h3 class="head-job">前端工程师</h3>
                    </div>
                    <div class="my-link"></div>
                </section>
                <section class="info">
                    <ul>
                        <li>男 / 14年毕业</li>
                        <li>河南大学民生学院 / 统招本科</li>
                    </ul>
                </section>
                <section class="contact">
                    <ul>
                        <li>
                            <a href="mailto:252326977@qq.com">
                                <span class="contact-link"
                                    >blossom@zhfei.cc</span
                                >
                                <span class="iconfont">
                                    <svg
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 1024 1024"
                                    >
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
                                    <svg
                                        width="16px"
                                        height="16px"
                                        viewBox="0 0 1024 1024"
                                    >
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
                                <header class="item-hd">
                                    <span>熟悉前端各领域业务技能</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        在C端方向，精通 Hybrid ，RN 与 Electron
                                        等跨平台开发方案，对热更，动态渲染，主流社媒登录分享，唤醒机制，动态模型（Lottie，Spine，Live2d），响应式兼容都有所研究，了解Cocos，小程序，较深入视图渲染层，擅长页面性能与用户体验优化
                                    </li>
                                    <li>
                                        在B端方向，深入了解主流微前端，
                                    </li>
                                    ssr waf 风控 验证 低代码 组件建设
                                    脚手架(模版) 工具库 模版
                                    <li>
                                        掌握 Node、Python 等后端编程语言，熟悉
                                        TCP、HTTP、WebSocket 网络协议， 深入理解
                                        RESTful 设计思想，能够设计符合 RESTful
                                        风格的 API， 理解 SSR
                                        原理，了解服务端渲染
                                    </li>
                                </ul>
                                <header class="item-hd">
                                    <span>主导团队工程化体系建设</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        在C端方向，精通 Hybrid ，RN Electron
                                        等混合开发方案，对热更，社媒分享，APP唤醒，各
                                        用于开发跨平台桌面程序，了解基于 RPC
                                        的主进程渲染进程通信机制， 对于 Electron
                                        环境下原生模块使用，质量监控，压缩打包，自动更新等实现都有所了解
                                    </li>
                                    <li>
                                        熟练掌握 Webpack 原理，理解 AST
                                        运行机制，对 loader 和 plugin
                                        有深⼊理解，掌握前端与客户端通信原理，可基于底层实现两端通信的
                                        Bridge 框架，并封装基于 Tree Shaking 的
                                        npm 包管理快速迭代
                                    </li>
                                    <li>
                                        掌握 Node、Python 等后端编程语言，熟悉
                                        TCP、HTTP、WebSocket 网络协议， 深入理解
                                        RESTful 设计思想，能够设计符合 RESTful
                                        风格的 API， 理解 SSR
                                        原理，了解服务端渲染
                                    </li>
                                </ul>
                                <header class="item-hd">
                                    <span>具备较丰富的团队管理经验</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        在C端方向，精通 Hybrid ，RN Electron
                                        等混合开发方案，对热更，社媒分享，APP唤醒，各
                                        用于开发跨平台桌面程序，了解基于 RPC
                                        的主进程渲染进程通信机制， 对于 Electron
                                        环境下原生模块使用，质量监控，压缩打包，自动更新等实现都有所了解
                                    </li>
                                    <li>
                                        熟练掌握 Webpack 原理，理解 AST
                                        运行机制，对 loader 和 plugin
                                        有深⼊理解，掌握前端与客户端通信原理，可基于底层实现两端通信的
                                        Bridge 框架，并封装基于 Tree Shaking 的
                                        npm 包管理快速迭代
                                    </li>
                                    <li>
                                        掌握 Node、Python 等后端编程语言，熟悉
                                        TCP、HTTP、WebSocket 网络协议， 深入理解
                                        RESTful 设计思想，能够设计符合 RESTful
                                        风格的 API， 理解 SSR
                                        原理，了解服务端渲染
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
                            <header class="item-hd">
                                <h3 class="item-name">
                                    北京百度时代网络技术有限公司 (2020.7-至今)
                                </h3>
                            </header>
                            <div class="item">
                                <header class="item-hd">
                                    <a
                                        href="https://live.baidu.com/"
                                        target="_blank"
                                        >百度直播业务</a
                                    >
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        负责 百度App/百家号 直播相关业务， 包括:
                                    </li>
                                    <li>
                                        端内Feed直播频道， 直播间内半屏页，
                                        主播信息页， 预约页等
                                    </li>
                                    <li>
                                        端外PC/H5主站， 直播间分享页，
                                        重大直播活动保障工作
                                    </li>
                                    <li>各垂类直播运营活动项目</li>
                                </ul>
                            </div>

                            <div class="item">
                                <header class="item-hd">
                                    <a
                                        href="https://live.baidu.com/m/media/pclive/pctool/download.html"
                                        target="_blank"
                                        >百度直播伴侣</a
                                    >
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        与YY团队共建主播PC开播工具，基于QT开发，C++实现底层视频编解码
                                    </li>
                                    <li>
                                        上层完全基于Web开发， 实现登录，
                                        聊天公屏， 画面采集渲染等基础功能
                                    </li>
                                    <li>
                                        基于产品需求，实现礼物特效，ppt演示，多人连麦，预约直播等业务功能
                                    </li>
                                    <li>
                                        支持rtmp与webrtc两种推流协议，满足不同直播场景需求
                                    </li>
                                </ul>
                            </div>

                            <div class="item">
                                <header class="item-hd">
                                    <span>其他</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        主导组内Web播放器的开发工作，封装各类功能插件，基于wasm支持H265编码
                                    </li>
                                    <li>
                                        主导组内基于无极UI风格的React组件库，负责组内效率工具/脚手架的维护工作
                                    </li>
                                    <li>
                                        工作期间获得2次季度团队奖，2次季度个人奖，并主导提交专利一篇
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section-bd">
                            <header class="item-hd">
                                <h3 class="item-name">
                                    北京与你科技有限公司 (2017.7-2020.6)
                                </h3>
                            </header>
                            <div class="item">
                                <header class="item-hd">
                                    <a
                                        href="https://www.uneed.com"
                                        target="_blank"
                                        >与你IM桌面版</a
                                    >
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        主导与你IM桌面端的开发工作，项目基于
                                        Electron 做跨平台开发
                                    </li>
                                    <li>
                                        基于 Vue 做渲染层处理，Rxjs
                                        做状态管理，SQLite
                                        做数据持久化，Websocket 实现通信机制
                                    </li>
                                    <li>
                                        实现群权限管理，@群成员，文件拖动发送，音视频表情发送，消息撤回，重发，
                                        转发等基本IM功能
                                    </li>
                                    <li>
                                        基于oss实现断点上传与分片下载，实现云端文件音视频播放，实现Electron全量更新与增量更新等自动更新功能
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
                                        通过实现基础的动画效果函数，可基于时间帧组合创造动画效果，生成
                                        JSON 格式动画效果配置文件
                                    </li>
                                    <li>
                                        实现动画配置文件的载入，播放，重播，暂停，调整动画时间，制作gif图等功能
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>后台项目</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        主导后台管理系统，实现账号权限系统，根据不同部门人员实现相应功能需求
                                    </li>
                                    <li>
                                        实现自动部署，代码回滚，发布日志，App版本管理，版本灰度管理，用户资料审核，用户数据统计，用户封禁，活动监测，通知管理等各类模块
                                    </li>
                                    <li>
                                        主导了基于 Docker Drone 部署 gitlab
                                        runner 执⾏ CI，
                                        解决客户端自动打包，i18n项目自动编译发布，
                                        服务端自动测试等场景需求
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="section-bd">
                            <header class="item-hd">
                                <h3 class="item-name">
                                    河南东方国际地产开发有限公司 (2014.9-2017.5)
                                </h3>
                            </header>
                            <div class="item">
                                <ul class="item-bd">
                                    <li>
                                        任职项目工程部门，负责CAD施工图的绘制与施工进度和质量的审查工作
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
                                    <span>图形与游戏</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        基于Canvas实现关卡编辑、场景切换、分数系统、重力系统、按键响应以及粒子爆炸特效等
                                    </li>
                                    <li>
                                        基于图形学原理从零实现世界坐标系
                                        模型坐标系 视口坐标系的三维转换，完成各
                                        mesh 的 三维模型渲染
                                    </li>
                                    <li>
                                        实现光栅化渲染，色彩过渡，背面剔除优化与三角形平面模式的光线效果
                                    </li>
                                    <li>
                                        了解计算音视频压缩处理逻辑，
                                        可基于DCT实现有损压缩，
                                        了解计算机基于采样和频率，谐波的音频生成逻辑
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>编译器与虚拟机</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        实现自定义CPU指令集、寄存器、寻址模式、内存读写，
                                        字符编码(基于ASCII)
                                    </li>
                                    <li>
                                        实现编译器生成二进制机器码，并实现虚拟机去执行机器码逻辑
                                    </li>
                                    <li>
                                        实现汇编级别的局部变量、字符串、数组、运算，函数传参调用(支持递归)
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>FC游戏模拟器</span>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        实现大部分 6502
                                        CPU指令集，包括汇编和虚拟机
                                    </li>
                                    <li>
                                        实现NES文件的解析，并对接自己实现的FC模拟器
                                    </li>
                                    <li>
                                        实现内存与虚拟显存的映射，
                                        并支持手柄控制逻辑
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
                            <div class="item">
                                <header class="item-hd">
                                    <span>与你桌面端</span>
                                </header>
                                <img
                                    class="demo-img"
                                    src="./img/desktop.png"
                                    alt=""
                                />
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>直播伴侣</span>
                                </header>
                                <img
                                    class="demo-img"
                                    src="./img/bdpc.png"
                                    alt=""
                                />
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>动画编辑器</span>
                                </header>
                                <img
                                    class="demo-img"
                                    src="./img/5.png"
                                    alt=""
                                />
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>图形引擎</span>
                                </header>
                                <img
                                    class="demo-img"
                                    src="./img/1.png"
                                    alt=""
                                />
                            </div>
                            <!-- <div class="demo-box">
                                <div class="item">
                                    <header class="item-hd">
                                        <span>图形引擎</span>
                                    </header>
                                    <img class="demo2-img" src="./img/1.png" alt="" />
                                </div>

                                <div class="item">
                                    <header class="item-hd">
                                        <span>动画编辑器</span>
                                    </header>
                                    <img class="demo2-img" src="./img/5.png" alt="" />
                                </div>
                            </div> -->
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
    name: "App"
};
</script>
