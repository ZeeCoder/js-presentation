// hello_world.js

// dependencies
var hello = require('./hello');
var world = require('./world');

// Public API
module.exports = {
    doTheThing: function() {
        console.log(hello() + ' ' + world() + '!');
    }
};
