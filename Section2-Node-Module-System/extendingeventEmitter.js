const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { // when a function is inside the class is called method
    log(message) {
        // Send an HTTp request
        console.log(message);
    
        // raise an event                  //Event argument
        this.emit('messabeLogged', { id: 1, url: 'http://' });
    }
}

module.exports = Logger
