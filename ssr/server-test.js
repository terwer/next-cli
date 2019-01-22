// =================
// Usage
// =================
require('./server.js')

var promise = global.renderServer()

promise.then(value => {
    console.log(value); // Success!
}, reason => {
    console.log(reason); // Error!
});
