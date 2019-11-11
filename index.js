const express = require('express');
const app =  express();
const path = require('path');

//sets
app.set('port', process.env.PORT || 3500);

//statics files
app.use(express.static(path.join(__dirname, 'public')));

//start server
const server = app.listen(app.get('port'), (req, res)=>{
    console.log('server on port' , app.get('port'));  
});

//webSockets
const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket)=>{
    console.log(socket.id);

    socket.on('mychat', (data)=>{
        io.sockets.emit('mychat', data);
        
    })

    socket.on('wr', (data)=>{
        socket.broadcast.emit('wr', data)
    })
    
})