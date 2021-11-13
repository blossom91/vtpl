/* eslint-disable */
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const portfinder = require('portfinder');
const baseWebpackConfig = require('./webpack.config.base');
const utils = require('./utils');
const config = require('./project.config');
const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
const htmlWebpackPlugins = () => {
    const pluginsTemp = [
        // 模块热替换
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(config.dev.env),
        }),
    ];
    if (config.dev.mock) {
        const MockWebpackPlugin = require('mock-webpack-plugin');
        pluginsTemp.push(
            new MockWebpackPlugin({
                config: require('../mock/config.js'),
                port: config.dev.mockPort,
            })
        );
    }
    return pluginsTemp;
};

const devConfig = {
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?!(@baidu\/eop-[^/]*)\/).*/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ico$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                    name: '[name].[hash:8].[ext]',
                },
            },
        ],
    },
    plugins: [...htmlWebpackPlugins(), ...utils.htmlWebpackPluginList],
    devServer: {
        // 关闭日志
        clientLogLevel: 'silent',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: false,
        compress: true,
        disableHostCheck: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        // openPage: 'pages/*.html',  // 自动打开页面时选择打开页面

        // { warnings: false, errors: true } 不显示警告，只显示错误 : false 都不显示
        overlay: config.dev.errorOverlay ? {warnings: false, errors: true} : false,
        stats: {
            colors: true,
        },
        proxy: config.dev.proxyTable,
        quiet: config.dev.quiet,
    },
};

const devWebpackConfig = merge(baseWebpackConfig, devConfig);

// 自动检索下一个可用端口
module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;
            const arrMessages = utils.pages.map(
                (e) =>
                    `点击打开页面: http://${devWebpackConfig.devServer.host}:${port}${config.dev.assetsPublicPath}${e}\n`
            );
            // 配置友好的提示插件
            devWebpackConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: arrMessages,
                    },
                    onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined,
                })
            );
            resolve(devWebpackConfig);
        }
    });
});
