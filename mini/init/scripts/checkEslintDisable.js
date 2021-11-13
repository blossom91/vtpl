/**
 * @file check eslint
 */
/* eslint-disable */
const git = require('simple-git/promise');
const gitP = git();

gitP.status().then((status) => {
    if (status.modified.includes('.config/project.config.js')) {
        console.log('\x1B[31m%s\x1B[0m', '------\nerror: 本地.config配置文件不可提交\n------');
        process.exit(1);
    }
    return Promise.all(
        status.created.map((item) => {
            return gitP.diff([item]).then((diff) => {
                if (/[ /*]+eslint-disable[ /*]*\n/.test(diff) && !/[ /*]+eslint-enable[ /*]*\n/.test(diff)) {
                    console.log(`\n新创建的文件 ${item} 存在 eslint-disable\n请修改后提交\n`);
                    process.exit(1);
                }
            });
        })
    );
});
