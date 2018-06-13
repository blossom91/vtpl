'use strict'

const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const htmlWebpackPlugins = () => {
    const arr = []
    if (config.singlePage) {
        const conf = {
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true, // 移除注释
                collapseWhitespace: true, // 折叠在文档树中有助于文本节点的空白区域。
                removeAttributeQuotes: true, // 移除属性引导
            },
            chunksSortMode: 'dependency',
        }
        arr.push(new HtmlWebpackPlugin(conf))
    } else {
        const pages = utils.getMultiEntry('html')
        for (const pathname in pages) {
            // 配置生成的html文件，定义路径等
            const conf = {
                filename: pathname + '.html',
                template: pages[pathname], // 模板路径
                chunks: ['vendor', pathname], // 每个html引用的js模块
                minify: {
                    removeComments: true, // 移除注释
                    collapseWhitespace: true, // 折叠在文档树中有助于文本节点的空白区域。
                    removeAttributeQuotes: true, // 移除属性引导
                },
                inject: true, // js插入位置
            }
            // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
            arr.push(new HtmlWebpackPlugin(conf))
        }
    }
    return arr
}

const commonsChunkPlugins = () => {
    if (config.singlePage) {
        return [
            // 公用模块提到vendor文件中
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks(module) {
                    // any required modules inside node_modules are extracted to vendor
                    return (
                        module.resource &&
                        /\.js$/.test(module.resource) &&
                        module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
                    )
                },
            }),
            // webpack代码存放地  使用缓存需要这个
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity,
            }),
            // 提取动态依赖公共代码需要
            new webpack.optimize.CommonsChunkPlugin({
                name: 'app',
                async: 'vendor-async',
                children: true,
                minChunks: 3,
            }),
        ]
    } else {
        return [
            // 公用模块提到vendor文件中
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: 3,
            }),
        ]
    }
}

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true,
        }),
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': config.build.env,
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                comments: true, // 去掉注释
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    // drop_console: true,
                    pure_funcs: ['console.log'],
                }, // 不显示警告信息
            },
            //  如果配置了Uglify，那这里也要配合devtool设置sourcemap。比如devtool设置了sourcemap类型，但这里设false，那压缩的时候会把生成的map文件删掉
            sourceMap: config.build.productionSourceMap,
            parallel: true, // 开启多核并行处理压缩，加快速度
        }),
        // 提取css打包成一个文件
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            allChunks: true,
        }),
        // 压缩去除无用css代码
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? { safe: true, map: { inline: false } }
                : { safe: true },
        }),
        new CleanWebpackPlugin(['dist/*'], {
            root: path.join(__dirname, '../'),
        }),

        ...htmlWebpackPlugins(),
        // 保持缓存
        new webpack.HashedModuleIdsPlugin(),
        // 提升打包速度
        new webpack.optimize.ModuleConcatenationPlugin(),

        ...commonsChunkPlugins(),
    ],
})

if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')
    // gzip压缩打包
    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.build.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8,
        })
    )
}
// 开启后会在build完成后自动打开localhost:8888页面，显示所有生成文件的大小与依赖包含情况
if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
