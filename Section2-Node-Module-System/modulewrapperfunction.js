(function (exports, require, module, __filename, __dirname) { //module wrapper

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';


function log(message) {
    // Send an HTTp request
    console.log(message);
}

module.exports = log; 

module.exports.log = log;
exports.log = log;

exports = log; //module.export

})