/* eslint-disable */
const HtmlWebpackPreRenderPlugin = require('@baidu/html-webpack-pre-render-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');
const Fs = require('fs');
const Evaluate = require('eval');
const ProjectConfig = require('./project.config');
const createNotifierCallback = () => {
    const notifier = require('node-notifier');
    return (severity, errors) => {
        if (severity !== 'error') return;

        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();

        notifier.notify({
            title: ProjectConfig.buildName || 'live',
            message: severity + ': ' + error.name,
            subtitle: filename || '',
        });
    };
};

/**
 * 每个页面下的page.config.js
 * [{
 *    "name": "index", // 必须，保证每个项目的唯一性
 *    "title": "页面标题", // 必须
 *    "dpPageId": xx, // 必须，平台生成，页面维度
 *    "xafDataApp": 'xx'， // 非必须，反作弊字段
 *    //
 *    // 渲染类型，模板位置同目录结构
 *    // tpl(smarty)：
 *    // 生成tpl文件 + window._page_data；
 *    // 文件地址：/template/(cashvideo|tocactivity)/项目名称/子页面.tpl
 *    // html：
 *    // 生成html文件 + 无初始数据注入；
 *    // 文件地址：/webroot/m/(cashvideo|tocactivity)/项目名称/子页面.html
 *    //
 *    "renderType": 'html/tpl' // 必须，render
 *    "template": "src/template/base.ejs", // 非必须，extendsTpl 继承的模板，默认为base.ejs，不修改可以不写
 * }]
 */
const ICODE_PROJECT_NAME = ProjectConfig.projectName;
const ICODE_PRODUCT_NAME = ProjectConfig.productName;
const ICODE_BUSINESS_NAME = ProjectConfig.business;
let Entry = {}; // 导出给webpack用的entry
let HtmlWebpackPluginList = []; // 处理后的待插件处理的列表
let SelfBuildPageConfig = ProjectConfig.buildName; // 自定义构建的页面，value值同pages/目录名
const BuildConfigFileType = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

let MINIFY_CONFIG = {
    // minify 配置
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
};

const Deal = {
    isSelfBuildPage: () => {
        if (BuildConfigFileType === 'prod' || !SelfBuildPageConfig) {
            // 生产模式下，全部导出
            return false;
        }
        return true;
    },
    /**
     * 搜集pages下的所有page.config.js
     * 项目为key，文件导出的数组为value
     *
     * @return {Object} 所有配置
     */
    collectAllPageConfig: () => {
        let pageConfigs = {};
        const pagesPath = Path.resolve(__dirname, '../src/pages');
        let projectNames = [];

        try {
            projectNames = Fs.readdirSync(pagesPath);
        } catch (e) {
            return;
        }
        projectNames.forEach((filename) => {
            // 获取当前文件的绝对路径
            const filedir = Path.join(pagesPath, filename);
            // 根据文件路径获取文件信息，返回一个fs.Stats对象
            const stats = Fs.statSync(filedir);

            // 是文件夹
            const isDir = stats.isDirectory();
            if (!isDir) {
                return;
            }
            // 读取文件夹下面的page.config.js
            let pageConfigContent = '';
            try {
                pageConfigContent = Fs.readFileSync(Path.resolve(filedir, 'page.config.js'));
            } catch (e) {
                return;
            }
            pageConfigs[filename] = Evaluate(pageConfigContent);
        });
        return pageConfigs;
    },

    /**
     * 生成htmlwebpackplugin需要的入参对象
     * @param {Object} page.config对应的每条配置
     * @return {Object} htmlwebpackplugin需要的入参对象
     */
    createWebpackConfig: (projectName, item) => {
        if (item.name.indexOf('/') !== -1) {
            throw new Error(`/pages/${projectName}/page.config.js: / is not allowed in page.config.js.`);
        }

        // entry规则，点号分割
        const entryName = `${projectName}.${item.name}`.toLowerCase();
        // smarty,html 渲染路径，名称规则统一
        // const tplPathAndName = `${CODE_PROJECT_NAME}/${projectName}/${item.name}`.toLowerCase();
        const htmlPathAndName = `${ICODE_PRODUCT_NAME}/${ICODE_PROJECT_NAME}/${projectName}/${item.name}`.toLowerCase();
        Entry[entryName] = Path.resolve(__dirname, `../src/pages/${projectName}/${item.name}.js`);
        let htmlWebpackPluginItem = {
            ...item,
            title: item.title,
            filename: `template/${htmlPathAndName}.tpl`,
            template:
                item.template ||
                Path.resolve(__dirname, '../node_modules/@baidu/html-webpack-pre-render-plugin/template/base.ejs'),
            dpPageId: item.dpPageId,
            inject: item.inject,
            hash: false,
            chunks: [entryName],
            minify: MINIFY_CONFIG,
        };

        if (BuildConfigFileType === 'dev') {
            htmlWebpackPluginItem.filename = `m/${htmlPathAndName}.html`;
        } else {
            // smarty 渲染
            htmlWebpackPluginItem.pageDataTpl =
                '{%if $apiData%} window._page_data = {%json_encode($apiData)%}; {%/if%}  {%if $commonData%} window._common_data = {%json_encode($commonData)%}; {%/if%}';

            htmlWebpackPluginItem.render = {
                paths: [`/webroot/${ICODE_BUSINESS_NAME}/m/${htmlPathAndName}.html`],
            };
        }
        if (item.xafDataApp) {
            htmlWebpackPluginItem.xafDataApp = item.xafDataApp;
        }

        return htmlWebpackPluginItem;
    },
};

/**
 * 所有页面对应的page.config.js
 *
 * key: 项目名
 * value: 该项目的page.config.js配置
 */
let AllPageConfigList = {};
let BuildPageConfigList = {};
let Pages = []; // 所有页面
// 收集所有项目的page.config.js
AllPageConfigList = Deal.collectAllPageConfig();

// 确定最终导出的页面
if (Deal.isSelfBuildPage()) {
    const selfPageNames = SelfBuildPageConfig.split(',');
    selfPageNames.forEach((pageName) => {
        BuildPageConfigList[pageName] = AllPageConfigList[pageName];
    });
} else {
    Object.keys(AllPageConfigList).forEach((pageName) => {
        const pageConfigList = AllPageConfigList[pageName];
        let newPageConfigList = [];
        if (pageConfigList && pageConfigList.length > 0) {
            pageConfigList.forEach((pageItem) => {
                if (pageItem.status !== 'offline') {
                    newPageConfigList.push(pageItem);
                }
            });
        }
        if (newPageConfigList.length > 0) {
            BuildPageConfigList[pageName] = newPageConfigList;
        }
    });
}
// 根据项目下的page.config.js，生成htmlPlugin配置
Object.keys(BuildPageConfigList).forEach((projectName) => {
    let pageNameByProject = {};
    let pageConfigList = BuildPageConfigList[projectName];
    if (!pageConfigList) {
        return;
    }

    for (let i = 0; i < pageConfigList.length; i++) {
        const item = pageConfigList[i];
        // 这里根据开发环境和个人开发配置设置devPages决定开启响应页面数量 空表示全部
        if (BuildConfigFileType === 'dev' && ProjectConfig.devPages.length) {
            if (!ProjectConfig.devPages.includes(item.name)) {
                continue;
            }
        }
        if (!item.name) {
            throw new Error(`/pages/${projectName}/page.config.js: name is required.`);
        }

        if (pageNameByProject[item.name]) {
            throw new Error(`/pages/${projectName}/page.config.js: name（${item.name}） is exist.`);
        }

        let configItem = Deal.createWebpackConfig(projectName, item);
        Pages.push(configItem.filename);
        HtmlWebpackPluginList.push(new HtmlWebpackPreRenderPlugin(configItem));
        pageNameByProject[item.name] = item.name;
    }
});

module.exports = {
    createNotifierCallback,
    pages: Pages,
    htmlWebpackPluginList: HtmlWebpackPluginList,
    entrys: Entry,
};
