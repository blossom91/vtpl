const pr2remPlugin = require('postcss-plugin-pr2rem');

const pr2remConfig = {
    // 设计图为1242px
    rootValue: 300,
    unitPrecision: 5,
    propWhiteList: [],
    propBlackList: [],
    selectorBlackList: [],
    ignoreIdentifier: '00',
    replace: true,
    mediaQuery: false,
    minPixelValue: 0,
};

module.exports = {
    ident: 'postcss',
    plugins: [require('postcss-preset-env')(), pr2remPlugin(pr2remConfig)],
};
