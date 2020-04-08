const express = require("express");
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 3000;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


// io.on('connection', function (socket) {
//   // console.log("Device Connected", socket.id)
//   socket.emit('lastname', { last: 'Siddiqui' });/// this sending to UI if 'last name' must be same
//   socket.on('My Name', function (data) { // this is listening from the UI if 'My Name' must be same
//     console.log(data);
//   });
// });

io.on("connection", socket => {
  socket.on("chat message", msg => {
    console.log(msg, "listing from ui");
    io.emit("chat msg", msg);
  });
});


server.listen(port, () => console.log("server running on port:" + port));