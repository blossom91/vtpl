/**
 * @file  常用工具函数封装入口
 * @author zhaohang12@baidu.com
 * @date 2021-02-09 19:52:40
 */

export const getQueryString = (name) => {
    let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
};

export const getQueryArr = (arr) => {
    let paramsNewArr = [];
    for (let i = 0; i < arr.length; i++) {
        paramsNewArr.push(getQueryString(arr[i]));
    }
    return paramsNewArr;
};

export const replaceProtocol = (url) => {
    const protocol = location.protocol.indexOf('https') >= 0 ? 'https' : 'http';
    if (typeof url !== 'string') {
        return;
    }
    return url.replace(/^(https|http)/, protocol);
};

export const getUrlParam = (name) => {
    let reg = new RegExp(`(^|(&|/?))${name}=([^&]*)(&|$)`, 'i');
    let r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return r[3];
    }
    return '';
};

// object 转 str for url
export const buildParam = (data) => {
    if (typeof data === 'object') {
        return Object.keys(data)
            .map((key) => {
                let value = data[key] === undefined ? '' : encodeURIComponent(data[key]);
                return `${key}=${value}`;
            })
            .join('&');
    }
    return '';
};

// 随机定长字符串
export const randomString = (length) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};

// 注册页面隐藏展示事件
export const registerPageHidden = (hiddenCallback, showCallback) => {
    let property = 'hidden';
    let eventName = 'visibilitychange';
    if (typeof document.hidden !== 'undefined') {
        // Opera 12.10 and Firefox 18 and later support
        property = 'hidden';
        eventName = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        property = 'msHidden';
        eventName = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        property = 'webkitHidden';
        eventName = 'webkitvisibilitychange';
    }
    let pageChange = (e) => {
        if (document[property] || e.hidden || document.visibilityState === 'hidden') {
            hiddenCallback && hiddenCallback();
        } else {
            showCallback && showCallback();
        }
    };
    document.addEventListener(eventName, pageChange, false);
};

/**
 * 日期格式化
 * @function dateFormat
 * @param {Date} d - date 对象
 * @param {string} [pattern = 'yyyy-MM-dd'] - 字符串
 * @return {string} 处理后的字符串
 * @example
 *	var d = new Date();
 *  dateFormat(d," yyyy年M月d日\n yyyy-MM-dd\n MM-dd-yy\n yyyy-MM-dd hh:mm:ss")
 *  //2018年11月10日\n 2018-01-01\n 01-01-18\n 2018-11-12 12:01:02
 */
export const dateFormat = (d, pattern = 'yyyy-MM-dd') => {
    let y = d.getFullYear().toString();
    let o = {
        M: d.getMonth() + 1, // month
        d: d.getDate(), // day
        h: d.getHours(), // hour
        m: d.getMinutes(), // minute
        s: d.getSeconds(), // second
    };
    pattern = pattern.replace(/(y+)/gi, (a, b) => y.substr(4 - Math.min(4, b.length)));
    Object.keys(o).forEach((i) => {
        pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), (a, b) => {
            return o[i] < 10 && b.length > 1 ? '0' + o[i] : o[i];
        });
    });
    return pattern;
};
