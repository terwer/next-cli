const path = require('path');

console.log("path:" + path.resolve(__dirname, '../dist'))

module.exports = {
    node: {
        fs: 'empty',
        module: 'empty'
    },
    entry: './server.js',
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: 'server-bundle.js'
    }
};