module.exports = {
    buildName: 'demo', // 决定当前开发的项目
    devPages: [], // 决定当前开发环境响应的页面
    dev: {
        // mock: true,
        // proxyTable: {
        //     '/bdlive/**': {
        //         target: 'http://localhost:5000',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // },
    },
    build: {
        // assetsPublicPath: '/',
        eslint: false, // 关闭eslint 可大幅提高打包速度
    },
};
