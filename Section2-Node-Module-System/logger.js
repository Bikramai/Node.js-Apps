var url = 'http://mylogger.io/log';


function log(message) {
    // Send an HTTp request
    console.log(message);
}

module.exports.log = log;