/**
 * @file 打点处理入口文件
 * @author zhaohang12@baidu.com
 * @date 2021-02-09 19:29:21
 */

import {getUrlParam} from '@utils/index';
import Thunder from '@/utils/thunder';

const source = getUrlParam('source');

const thunderLog = Thunder.getInstance({
    tid: '',
    ct: 3,
    cst: 1,
    logFrom: '',
    logInfo: '',
});

export const updateThunderLog = (option) => {
    thunderLog.extendBase(option);
};

/*
 * @method 发送日志方法
 * @param logInfo {Object} 必填 发送日志需要携带的参数
 * @param url {String} 可选 发送日志的公共路径
 * @param callback {Function} 可选 发送日志完成后的回调函数
 */
const log = (logInfo) => {
    Object.assign(logInfo.logExtra, {
        source: source,
    });
    return thunderLog.sendLog(logInfo);
};

export default log;
