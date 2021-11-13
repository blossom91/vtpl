const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const buildPath = path.resolve(__dirname, '../output/dist');

module.exports = {
    mode: 'production',
    entry: {
        index: ['./components/index.js'],
    },
    devtool: 'source-map',
    output: {
        path: path.join(process.cwd(), 'output/dist'),
        library: 'nano-react',
        libraryTarget: 'umd',
        filename: 'index.min.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory',
                    },
                ],
                include: [path.resolve('components')],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'cache-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            minimize: true,
                        },
                    },
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=8192',
            },
        ],
    },
    optimization: {
        minimize: true,
        noEmitOnErrors: true,
    },
    plugins: [
        new ProgressBarPlugin(),
        new CleanWebpackPlugin({buildPath}),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
    ],
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
};
