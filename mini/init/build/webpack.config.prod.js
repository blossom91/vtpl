/* eslint-disable */
const os = require('os');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HappyPack = require('happypack');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length * 2,
});
const baseWebpackConfig = require('./webpack.config.base');
const utils = require('./utils');
const config = require('./project.config');
const {business, projectName, productName} = config;
const staticPathPrefix = `static/${business}/${productName}/${projectName}`;

const isEslint = () => {
    let rules = [];
    let plugins = [];
    if (config.build.eslint) {
        rules.push({
            test: /\.jsx?$/,
            enforce: 'pre',
            use: 'happypack/loader?id=eslint',
            include: [path.join(__dirname, '..', 'src')],
        });
        plugins.push(
            new HappyPack({
                id: 'eslint',
                threadPool: happyThreadPool,
                loaders: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            quiet: true,
                            fix: true,
                            cache: false,
                            formatter: require('eslint-friendly-formatter'),
                            emitWarning: false,
                        },
                    },
                ],
            })
        );
        plugins.push(
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(config.build.env),
            })
        );
    }
    return {
        rules,
        plugins,
    };
};

const prodConfig = {
    devtool: false,
    performance: {
        maxAssetSize: 1024 * 1024,
        maxEntrypointSize: 1024 * 1024,
    },
    output: {
        filename: `${staticPathPrefix}/scripts/[name].[chunkhash:8].js`,
        chunkFilename: `${staticPathPrefix}/scripts/chunks/[name].[chunkhash:8].js`,
    },
    module: {
        rules: [
            ...isEslint().rules,
            {
                test: /\.jsx?$/,
                exclude: /node_modules\/(?!(@baidu\/(eop)-[^/]*)\/).*/,
                loader: 'happypack/loader?id=babel',
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'happypack/loader?id=styles'],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ico$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25000,
                            name: `${staticPathPrefix}/images/[name].[hash:8].[ext]`,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        // noEmitOnErrors: true,
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 5,
            maxAsyncRequests: 12, // for HTTP2
            minChunks: 5,
            cacheGroups: {},
        },
        minimize: true,
        minimizer: [
            // js 压缩处理
            new TerserPlugin({
                parallel: true, // 开启多核并行处理压缩，加快速度
                terserOptions: {
                    sourceMap: false,
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        // pure_funcs: ['console.log'],
                        global_defs: {
                            '@alert': 'console.log',
                        },
                        passes: 2,
                    }, // 不显示警告信息
                    output: {
                        beautify: false,
                    },
                },
            }),
            // css 压缩处理
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css\.*(?!.*map)/g,
                cssProcessorOptions: {
                    safe: true,
                    autoprefixer: false,
                    discardComments: {
                        removeAll: true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 保持缓存
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),
        ...isEslint().plugins,
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            ],
        }),
        new HappyPack({
            id: 'styles',
            threads: os.cpus().length,
            loaders: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]',
                        importLoaders: 2,
                        minimize: true,
                    },
                },
                'postcss-loader',
                'less-loader',
            ],
        }),
        new MiniCssExtractPlugin({
            filename: `${staticPathPrefix}/styles/[name].[contenthash:8].css`,
            chunkFilename: `${staticPathPrefix}/styles/chunks/[name].[contenthash:8].css`,
        }),
        ...utils.htmlWebpackPluginList,
        new ScriptExtHtmlWebpackPlugin({
            inline: /runtime~.*\.js$/,
        }),
    ],
};

const webpackConfig = merge(baseWebpackConfig, prodConfig);

// 开启后会在build完成后自动打开localhost:8888页面，显示所有生成文件的大小与依赖包含情况
if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
