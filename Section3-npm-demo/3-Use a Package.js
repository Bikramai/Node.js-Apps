// How to use third party library in Node?

// 1. we have installed underscore library as a third node module,
// 2. now let's use it. let's create fiel called index.js.
// 3. Here, we're going to use our require function to load the underscore module.
// 4. so far, by convention we use an underscore or referring to the underscore library.
// And argument we supply underscore.

const _ = require('underscore');

// first assumes that this-
// Core module
// File or folder
// inside the node_modules

const result = _.contains([1, 2, 3], 2);
console.log(result);