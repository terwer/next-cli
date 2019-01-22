// const fs = require('fs')
const path = require('path')
const {createBundleRenderer} = require('vue-server-renderer')

function createRenderer(bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
        runInNewContext: false
    }))
}

// const templatePath = path.resolve(__dirname, '../dist/index.template.html')
// console.log("templatePath:" + templatePath)
const bundle = require('../dist/server-bundle.json')
// const template = fs.readFileSync(templatePath, 'utf-8')
const clientManifest = require('../dist/client-manifest.json')

const renderer = createRenderer(bundle, {
    // template,
    clientManifest
})

global.renderServer = () => {
    const context = {
        url: '/'
    }
    console.log("context:" + JSON.stringify(context))
    return renderer.renderToString(context);
};

// =================
// Usage
// =================
// require('./server')
//
// var promise = global.renderServer()
//
// promise.then( value => {
//     console.log(value); // Success!
// }, reason => {
//     console.log(reason); // Error!
// } );