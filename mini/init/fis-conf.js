/* eslint-disable */
const proxy = process.env.PROXY;

const recieverMap = {
    zz: 'http://zhaohang12.bcc-szwg.baidu.com:8210',
};

const recieverAddress = recieverMap[proxy];

fis.match('**', {
    deploy: [
        fis.plugin('http-push', {
            host: recieverAddress,
            to: '/home/work/orp',
        }),
    ],
});
