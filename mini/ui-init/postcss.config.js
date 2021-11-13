/**
 * @file postcss config
 * @author zhaohang12@baidu.com
 * @date 2021-04-15 16:58:44
 */

const autoprefixer = require('autoprefixer');
const pr2rem = require('postcss-plugin-pr2rem');
const pr2remConfig = {
    // 设计图为1242px
    rootValue: 100 * 3,
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
    plugins: [autoprefixer({remove: false}), pr2rem(pr2remConfig)],
};
