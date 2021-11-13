const {Transform} = require('stream');

const lessTansPath = () => {
    let t = new Transform({
        objectMode: true,
        transform: (...args) => {
            let [file, encoding, callback] = args;
            let content = file.contents.toString('utf8');
            if (content.includes('../assets')) {
                content = content.replace(/\.\.\/assets/g, '../../assets');
                file.contents = Buffer.from(content);
            }
            return callback(null, file);
        },
    });
    return t;
};

module.exports = lessTansPath;
