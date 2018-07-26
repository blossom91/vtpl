'use strict'

const path = require('path')


module.exports = {
    moduleName: 'pages',
    singlePage: {{#singlePage}}true{{else}}false{{/singlePage}},
    dev: {
        env: {
            NODE_ENV: '"development"',
        },
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: {{#mobile}}'/packages/{{ name }}/versions/dev'{{else}}'/'{{/mobile}},
        assetsPublicPath: '/',
        proxyTable: {},
        host: '0.0.0.0', // 如果设置了process.env.HOST，则优先使用process.env.HOST
        port: 8080, // 如果设置了process.env.PORT, 则优先使用process.env.PORT. 如果配置的端口被占用，会自动分配一个空闲的新端口
        autoOpenBrowser: false, // 自动打开浏览器
        errorOverlay: true, // 是否显示错误
        notifyOnErrors: true,
        poll: false, // 是否开启轮询

        /**
         * Source Maps
         */
        devtool: 'cheap-module-eval-source-map',

        cacheBusting: true,
        // 是否开启cssSourceMap
        cssSourceMap: true,
    },

    build: {
        env: {
            NODE_ENV: '"production"',
        },
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: {{#singlePage}}'./'{{else}}'../'{{/singlePage}},
        // 是否开启sourceMap
        productionSourceMap: false,
        devtool: '#source-map',

        // 开启gzip压缩
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // 是否启动打包后的文件大小分析模块
        bundleAnalyzerReport: process.env.npm_config_report,
    },
}
