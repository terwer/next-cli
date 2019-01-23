// =================
// Usage
// =================
require("./server.js");

const promise = global.renderServer();

promise.then(
  value => {
    console.log(value); // Success!
  },
  reason => {
    console.log(reason); // Error!
  }
);
