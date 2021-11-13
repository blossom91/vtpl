const path = require('path');

module.exports = {
    mode: 'development',
    devtool: '#cheap-module-eval-source-map',
    entry: {
        path: path.resolve(__dirname, '../example/src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '../example/src'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../components/'),
        },
        extensions: ['.js', '.jsx', '.less'],
    },
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        contentBase: false,
        compress: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 7001,
        open: true,
        contentBase: path.join(__dirname, '../example/src'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: false,
                        },
                    },
                ],
            },
        ],
    },
};
