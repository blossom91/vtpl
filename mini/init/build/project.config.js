const path = require('path');
const myConfig = require('../.config/project.config');

const baseConfig = {
    business: 'live',
    productName: '<%= projectName %>',
    projectName: '<%= projectName %>',
    dev: {
        assetsPublicPath: '/',
        mock: false,
        mockPort: 5000,
        env: 'development',
        proxyTable: {
            // 本地开发接口代理 demo:
            // '/api/**': {
            //     target: 'http://localhost:5000',
            //     changeOrigin: true,
            //     secure: false
            // }
        },
        host: '0.0.0.0', // 如果设置了process.env.HOST，则优先使用process.env.HOST
        port: 8080, // 如果设置了process.env.PORT, 则优先使用process.env.PORT. 如果配置的端口被占用，会自动分配一个空闲的新端口
        autoOpenBrowser: false, // 自动打开浏览器
        errorOverlay: true, // 是否显示错误
        notifyOnErrors: true, // 控制台输出友好的提示
        quiet: true, // 关掉webpack输出到控制台的log
    },

    build: {
        eslint: false,
        assetsPublicPath: '//mbdp02.bdstatic.com/',
        env: 'production',
        assetsRoot: path.resolve(__dirname, '../output'),
        // 是否启动打包后的文件大小分析模块
        bundleAnalyzerReport: process.env.NODE_ANALYZE,
    },
};

const isTower = process.env.BUILD === 'tower';

// 没有过深的结构 可以简单merge
let config = baseConfig;
if (!isTower) {
    config = {
        ...baseConfig,
        ...myConfig,
        dev: {
            ...baseConfig.dev,
            ...myConfig.dev,
        },
        build: {
            ...baseConfig.build,
            ...myConfig.build,
        },
    };
}
module.exports = config;
