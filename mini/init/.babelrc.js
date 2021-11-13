module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties'],
        '@babel/plugin-syntax-dynamic-import',
    ],
};
