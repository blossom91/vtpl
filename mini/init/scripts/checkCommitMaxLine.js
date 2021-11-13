/**
 * @file check commit update max lines
 */
/* eslint-disable */
const git = require('simple-git/promise');

const gitP = git();

gitP.diffSummary(['--cached']).then((diffSummary) => {
    // 忽略不计算的列表，path绝对路径,如: scripts/build.sh
    const ignoreFilterList = ['package-lock.json'];
    const changes = {
        insertions: 0,
        deletions: 0,
        fileCounts: 0,
    };
    diffSummary.files.map((item) => {
        const isIgnore = ignoreFilterList.includes(item.file);
        if (!isIgnore) {
            changes.insertions += item.insertions;
            changes.deletions += item.deletions;
            changes.fileCounts += 1;
        }
        return isIgnore;
    });
    const codeChanges = changes.insertions + changes.deletions;
    if (codeChanges > 4000) {
        console.log(
            '\n每次commit修改不能超过400行，请当天工作当天提交，避免本地积攒大量修改；' +
                `\n此次commit涉及${changes.fileCounts}个文件，` +
                `新增${changes.insertions}行，删除${changes.deletions}行，` +
                `共修改${codeChanges}行；\n`
        );
        process.exit(1);
    }
});
