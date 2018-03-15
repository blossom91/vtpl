// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        'postcss-import': {}, // 处理@import引入文件
        'postcss-url': {}, //处理图片等资源引入
        'postcss-write-svg': { utf8: false },
        autoprefixer: {} //自动添加游览器前缀
        // 'postcss-aspect-ratio-mini': {},  // 处理宽高比
        // 'postcss-cssnext': {} // 可以使用未来的css特性
        // 'postcss-px-to-viewport': {
        //     //vw适配核心插件 可以自动把px转换成vw
        //     viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，我们是350
        //     viewportHeight: 667, // 视窗的高度，设计稿高度，也可以不配置
        //     unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）1.134
        //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        //     selectorBlackList: ['.ignore', 'hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名  例如css里面class为'.ignore'则不转换这个类
        //     minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        //     mediaQuery: false // 允许在媒体查询中转换`px`
        // },
        // 'postcss-viewport-units': {} //主要是给CSS的属性添加content的属性 配合viewport-units-buggyfill适配操作
    }
}
