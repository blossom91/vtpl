const path = require('path');
const utils = require('./utils');
const config = require('./project.config');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // 根目录
    mode: process.env.NODE_ENV === 'production' ? config.build.env : config.dev.env,
    context: path.resolve(__dirname, '../'),
    entry: utils.entrys,
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@utils': resolve('src/utils'),
        },
        extensions: ['.js', '.jsx', '.less'],
    },
    module: {
        // 将缺失的导出提示成错误而不是警告
        strictExportPresence: true,
        rules: [
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                            importLoaders: 0,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: `static/${config.business}/${config.productName}/${config.projectName}/fonts/[name].[hash:8].[ext]`, // eslint-disable-line
                },
            },
        ],
    },
};
