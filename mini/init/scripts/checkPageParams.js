/* eslint-disable */
const params = process.argv;
const configList = params.filter((path) => path.indexOf('page.config.js') > -1);
const fileList = params.filter((path) => path.indexOf('src/pages/') > -1 && path.indexOf('page.config.js') === -1);
const fs = require('fs');

configList.forEach((path) => {
    const config = require(path);
    config.forEach((page) => {
        if (!page.title && !page.subtitle) {
            throw new Error('页面参数错误： ' + page.name + ' title和desc至少要有一个不为空');
        }
    });
});

fileList.forEach((file) => {
    const fileDir = file.match('[^]*src/pages/[^]*?/');
    if (fileDir) {
        if (!fs.existsSync(fileDir[0] + 'page.config.js')) {
            throw new Error(
                '页面参数错误： 请将页面 ' + fileDir[0].split('/').slice(-2)[0] + ' 的配置迁移到page.config.js中'
            );
        } else {
            const config = require(fileDir[0] + 'page.config.js');
            let configParamList = [];
            config.forEach((page) => {
                if (page.params) {
                    configParamList = configParamList.concat(Object.keys(page.params));
                }
            });

            const fileStr = fs.readFileSync(file, 'utf8');

            const queryList = fileStr.match(/getUrlQuery\([^\)][^]*?\)/g);

            const paramList = (queryList && queryList.map((item) => item.match(/\(['|"]([^]*)['|"]\)/)[1])) || [];
            paramList.length &&
                paramList.forEach((param) => {
                    if (configParamList.indexOf(param) === -1) {
                        throw new Error('页面参数错误： 参数 ' + param + ' 没有在page.config.js中声明');
                    }
                });
        }
    }
});
