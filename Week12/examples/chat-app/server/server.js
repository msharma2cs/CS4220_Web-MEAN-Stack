const
    express = require('express'),
    path = require('path');

const
    app = express(),
    server = require('http').Server(app),
    host = "127.0.0.1",
    port = 8080;

app.use( express.static( path.join( __dirname, '..', '/client') ) )
require('./sockets')(server)

server.listen(port)
console.log(`Server listening at http://${host}:${port}`);
