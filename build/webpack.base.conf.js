'use strict'

const path = require('path')
const utils = require('./utils')
const config = require('./config')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 根目录
    context: path.resolve(__dirname, '../'),
    entry: config.singlePage ? { app: './src/main.js' } : utils.getMultiEntry('js'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    },
    resolve: {
        // 省略后缀
        extensions: ['.js', '.vue', '.json'],
        // 匹配:require('@/test') 等同于 ./src/test.js
        alias: {
            '@': resolve('src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: utils.cssLoaders({
                        sourceMap:
                            process.env.NODE_ENV === 'production'
                                ? config.build.productionSourceMap
                                : config.dev.cssSourceMap,
                        extract: process.env.NODE_ENV === 'production',
                    }),
                    cssSourceMap:
                        process.env.NODE_ENV === 'production'
                            ? config.build.productionSourceMap
                            : config.dev.cssSourceMap,
                    cacheBusting: config.dev.cacheBusting,
                    // 在模版编译过程中，编译器可以将某些属性，如 src 路径，转换为 require 调用。默认对img src通过
                    transformToRequire: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                    },
                },
            },
            // babel处理js可以提前使用es6功能
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
            },
            // 处理相应文件  小于2048b会被base打包而不会http请求
            {
                test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
                },
            },
        ],
    },
    node: {
        /** 不需要关注
         * node中的属性都是node.js中的模块。 当在浏览器下要访问这些模块的时候，该功能会指定一种处理方式
         * 'empty': 返回空
         * 'mock' : mock一个对象，功能比较有限
         *  false : 什么也不提供，如果引用会报错
         *  true  : 提供polyfill处理
         */
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
}
