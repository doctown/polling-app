var express = require('express');
var app = express();
var PORT = 3000;

var connections = [];
var title = 'Untitled Presentation';

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(PORT, function() {
  console.log('Server is listening on port: ', PORT);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log("Connected: %s", socket.id);

  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(soceket), 1);
    socket.disconnect();
    console.log("Disconnected: %s. %s sockets remaining.", socket.id, connections.length);
  });
  
  socket.emit('welcome', {
    title: title 
  });
});

