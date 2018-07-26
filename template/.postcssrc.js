// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        'postcss-import': {}, // 处理@import引入文件
        'postcss-url': {}, //处理图片等资源引入
        'autoprefixer': {}, //自动添加游览器前缀
    },
}
