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
                        <a href="http://zhaohang.site/" target="_blank">博客</a> |
                        <a href="https://github.com/blossom91" target="_blank">github</a> |
                        <a href="https://www.jianshu.com/u/f9d190d7cdd5" target="_blank">简书</a>
                    </div>
                </section>
                <section class="info">
                    <ul>
                        <li>男 / 1991.02</li>
                        <li>河南大学民生学院 / 本科 / 2014年毕业</li>
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
                                    <li>基于Electron构建IM桌面应用,Rxjs做全局数据管理,Websocket用于通信连接</li>
                                    <li>
                                        使用Node编写服务器,效率工具与脚本,用于爬虫,自动化部署,数据库批处理和web服务
                                    </li>
                                    <li>使用Vue,Vuex,Vue-Router全家桶开发,Less与Postcss预处理</li>
                                    <li>
                                        熟练掌握Webpack,可根据pc/移动/单/多页面应用需求配置相应环境,可自主开发Webpack插件
                                    </li>
                                    <li>
                                        熟练使用npm管理常用工具包,熟悉linux开发环境,通过npm管理App
                                        Bridge函数库,方便根据客户端版本动态迭代完成Hybrid开发
                                    </li>
                                    <li>开发过一个上线的小程序(与你创造共同回忆),用于引导微信用户注册</li>
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
                                    <h3 class="item-name">北京与你科技有限公司 (2017.03 至今)</h3>
                                </header>
                                <ul class="item-bd">
                                    <li>pc端: 与你后台管理系统</li>
                                    <li>
                                        客户端:
                                        钱包、红包、群组应用（幻灯片,天气小应用,小黄脸快聊等）和各种App模块页和活动页
                                    </li>
                                    <li>桌面端: 与你IM桌面版</li>
                                    <li>小程序: 与你创造共同回忆</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section class="project">
                        <header class="section-hd">
                            <span class="section-title-l"></span>
                            <h2 class="section-title">项目经历</h2>
                            <span class="section-title-r"></span>
                        </header>

                        <div class="section-bd">
                            <div class="item">
                                <header class="item-hd">
                                    <a href="https://www.uneed.com" target="_blank">与你IM桌面版</a>
                                </header>
                                <ul class="item-bd">
                                    <li>与你IM桌面版（https://www.uneed.com）是与你社交App的桌面版本</li>
                                    <li>项目基于Electron构建,Rxjs做全局事件管理,底层通信机制基于Websocket</li>
                                    <li>
                                        为了方便扩展,实现了一套文本编辑器,用于实现可定制的复制粘贴图片,@群成员功能,拖动消息发送,文件直接拖动发送等功能
                                    </li>
                                    <li>
                                        基于SQLite做了全局的数据储存,尽量本地化数据（包括本地用户数据,群组数据,图片缓存数据,聊天会话数据,上传下载数据,云空间数据等）提高软件稳定性,降低服务端压力
                                    </li>
                                    <li>为了提高性能,防止UI卡顿,项目利用了多线程处理最重要的消息通信模块</li>
                                    <li>
                                        通过阿里云oss实现了断点上传与分片下载,方便用户通过桌面端批量管理图片视频等资源,补充移动客户端文件管理的不便
                                    </li>
                                    <li>
                                        利用内嵌的ffmpeg模块解决用户上传视频播放格式的兼容性问题
                                    </li>
                                    <li>
                                        通过node获取音频包括封面等信息，基于强大的音频播放模块，实现了比较完备的音频播放支持
                                    </li>
                                    <li>根据用户不同系统（mac,win）解决各类兼容问题,支持个性化软件设置,提高用户体验</li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <span>与你APP内部页面</span>
                                </header>
                                <ul class="item-bd">
                                    <li>与你客户端内嵌的H5页面,包含了钱包,红包,群组小应用和各种功能模块和活动页面</li>
                                    <li>
                                        基于一套仿照小程序体系的bridge封装,开发与你App群组小应用,例如幻灯片,天气,一起看,戏精等
                                    </li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <a href="https://ops.uneed.com/" target="_blank">公司后台管理项目</a>
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        与你后台管理系统是公司产品管理平台,根据账号权限不同,分为运营权限,管理权限和员工权限等等,包含公司员工管理,用户信息管理,用户统计,App数据统计,客户端历史版本管理,投诉管理,App内容审核等等功能
                                    </li>
                                    <li>项目使用Vue全家桶,iview ui框架,后端使用go,数据库使用mysql与redis</li>
                                    <li>
                                        后台管理系统随着公司发展与产品迭代一直添加各种功能,目前大小模块60多个,极大方便了开发流程,简化了非开发人员的操作难度
                                    </li>
                                    <li>
                                        系统最主要实现了一套用于服务端自动部署发布的控制模块,包含服务端项目远端运行状态,项目自动化发布,一键重启,项目回滚功能,发布历史记录查询等功能
                                    </li>
                                    <li>当然也实现了我们前端管理客户端内嵌Hybrid页面的热更新发布与灰度版本功能</li>
                                </ul>
                            </div>
                            <div class="item">
                                <header class="item-hd">
                                    <a href="https://mp.weixin.qq.com/s/JfWm7r0SlGb1IoYCyXfdHA" target="_blank"
                                        >戏精小应用</a
                                    >
                                </header>
                                <ul class="item-bd">
                                    <li>
                                        基于社交App的本质,使用canvas做动画过于费电,所以虽然动画较复杂,还是通过js与css动画实现
                                    </li>
                                    <li>
                                        基于动画框架gsap开发了一套桌面端视图动画编辑工具,通过简单的参数配置自动生成动画需要的json文件
                                    </li>
                                    <li>
                                        通过canvas绘制图片和node脚本批量操作,为每一个用户在数据库生成了一套个性化的戏精头像
                                    </li>
                                </ul>
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
    name: 'App',
}
</script>

