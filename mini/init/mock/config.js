/**
 * @file mock config.js
 */
const path = require('path');

const config = require('./json');

Object.keys(config).forEach((item) => {
    config[item].path = path.resolve(__dirname, './json', config[item].data);
});

module.exports = config;
