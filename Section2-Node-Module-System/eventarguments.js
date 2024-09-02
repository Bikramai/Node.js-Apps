const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});

// raise an event                  //Event argument
emitter.emit('messabeLogged', { id: 1, url: 'http://' });