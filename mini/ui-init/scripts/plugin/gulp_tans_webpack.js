class TansPlugin {
    apply(compiler) {
        const pluginName = this.constructor.name;
        compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
            // compilation.assets 包含所有要输出的资源, 在输出之前, 可以修改这个对象改变最终输出的值
            let assets = compilation.assets;
            console.log('\ncompilation-------', Object.keys(compilation));
            // let filelist = 'In this build:\n\n';
            // Object.keys(assets).forEach(e => {
            //     filelist += `- ${e} \n`;
            // });
            // // 设置 filelist.md 的输出结果
            // compilation.assets['filelist.md'] = {
            //     // source 对应的函数中返回输出的文件内容
            //     source() {
            //         // 可以输出字符串或者输出 buffer
            //         return filelist;
            //     },
            //     // size 对应的函数中返回输出文件的大小

            //     size() {
            //         return filelist.length;
            //     },
            // };

            // 因为 emit 是一个异步 hook, 所以需要调用 callback 函数, 这样 webpack 就会执行下一步
            callback();
        });
    }
}

module.exports = TansPlugin;
