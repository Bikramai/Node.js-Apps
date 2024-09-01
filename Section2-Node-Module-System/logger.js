var url = 'http://mylogger.io/log';


function log(message) {
    // Send an HTTp request
    console.log(message);
}

/*
Here, we don't necessarily need an object coz we have single method. 
An object would be useful if we have multiple methods or properties here. 
In this case, Instead of exporting an object, we can export a single function.
*/ 
// module.exports.log = log; 
module.exports = log; 