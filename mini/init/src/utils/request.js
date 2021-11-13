/**
 * @file 封装所有常用请求
 * @author zhaohang12@baidu.com
 * @date 2020-12-10 11:32:57
 */
let callbackId = 0;

let jsonp = (url, data = {}, serverCallbackName = 'callback', overlay = 5000) => {
    if (typeof url !== 'string' || !(typeof data === 'object' && data !== null)) {
        throw new Error('params are no right!');
    }
    return new Promise((resolve, reject) => {
        const callbackName = `__jsonp_callback_${callbackId++}__`;
        const paramStr = [];
        data._ = +new Date();
        data[serverCallbackName] = callbackName;
        const keys = Object.keys(data);
        keys.forEach((key) => {
            let value = data[key] || '';
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            paramStr.push(`${key}=${encodeURIComponent(value)}`);
        });
        url = `${url}?${paramStr.join('&')}`;
        const script = document.createElement('script');
        script.type = 'text/javascript';

        let timeout;
        const errorCallback = (errmsg) => {
            document.body.removeChild(script);
            clearTimeout(timeout);
            delete window[callbackName];
            reject({errno: -1, errmsg});
        };
        timeout = setTimeout(() => {
            errorCallback('CONNECTION TIMEOUT');
        }, overlay);
        script.onerror = () => {
            errorCallback('CONNECTION REFUSED');
        };
        window[callbackName] = (data) => {
            if (+data.errno === 0) {
                resolve(data.data);
            } else {
                reject(data);
            }
            document.body.removeChild(script);
            clearTimeout(timeout);
            delete window[callbackName];
        };

        script.src = url;
        document.body.appendChild(script);
    });
};

const ajax = (
    url,
    data = '',
    option = {
        method: 'GET',
    }
) => {
    return new Promise((resolve, reject) => {
        let r = new XMLHttpRequest();
        r.open(option.method, url, true);
        if (option.method === 'POST') {
            option.contentType = option.contentType || 'application/json';
        }
        if (option.contentType) {
            r.setRequestHeader('Content-Type', option.contentType);
        }
        r.onreadystatechange = function () {
            if (r.readyState === 4) {
                const response = JSON.parse(r.response);
                if (response.errno === 0) {
                    resolve(response.data);
                } else {
                    reject(response);
                }
            }
        };
        r.onerror = reject;
        if (data && typeof data === 'object') {
            data = JSON.stringify(data);
        }
        r.send(data);
    });
};

export {jsonp, ajax};
