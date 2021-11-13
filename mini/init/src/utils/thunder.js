/**
 * @file 封装所有打点处理
 * @author zhaohang12@baidu.com
 * @date 2020-12-08 21:05:45
 */

export default class Thunder {
    // 单例模式
    static getInstance(opt = {}) {
        if (!this.instance) {
            this.instance = new Thunder(opt);
        }
        return this.instance;
    }

    constructor(opt) {
        const {baseURL, ...base} = opt || {};
        this.baseURL = baseURL || 'https://hpd.baidu.com/v.gif';
        this.baseParams = {
            tid: '',
            ct: 3,
            cst: 1,
            logInfo: '',
            logFrom: '',
            logExtra: null,
        };
        this.extendBase(base);
    }

    extendBase(opt) {
        let preLogExtra = this.baseParams.logExtra;
        this.baseParams = Object.assign({}, this.baseParams, opt);
        if (opt.logExtra || preLogExtra) {
            this.baseParams.logExtra = Object.assign({}, preLogExtra || {}, opt.logExtra || {});
        }
    }

    /*
     * @method 发送日志方法
     * @param url {String} 发送日志的公共路径
     * @param info {Object} 发送日志需要携带的参数
     * @param callback {Function} 发送日志完成后的回调函数
     */
    sendLog(info, url, callback) {
        // 处理logInfo
        let preLogExtra = this.baseParams.logExtra || {};
        let logInfo = Object.assign({}, this.baseParams, info);
        if (logInfo.logExtra || preLogExtra) {
            logInfo.logExtra = Object.assign({}, preLogExtra, logInfo.logExtra || {});
        }
        logInfo.logExtra.timestamp = `${+new Date()}`;

        // 拼接字符串
        let params = '';
        Object.keys(logInfo).forEach((key) => {
            let value = logInfo[key];
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            params += `&${key}=${encodeURIComponent(value)}`;
        });

        // 组装请求img
        const id = `l${Date.now()}`;
        const img = new Image();
        window[id] = window[id];
        let timer = null;
        let clear = function () {
            window[id] = null;
            if (timer) {
                clearTimeout(timer);
                timer = null;
                callback && callback();
            }
        };
        img.onload = clear;
        img.onerror = clear;
        img.onabort = clear;
        let reqUrl = url || this.baseURL;
        img.src = `${reqUrl}?${params.slice(1)}`;

        // 防止回调被hold住
        if (typeof callback === 'function') {
            timer = setTimeout(() => {
                timer = null;
                callback();
            }, 500);
        }

        return this;
    }

    // 兼容别名
    send(info, url, callback) {
        this.sendLog(info, url, callback);
    }
}
