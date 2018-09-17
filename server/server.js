const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000; 
const {generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app); 
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=>{
    console.log('New user connected');

// socket.emit('newEmail',{
//     from: 'example@gmail.com',
//     text: 'New mail',
//     createdAt: 123
// });

socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined!'));

socket.on('createMessage', (message)=>{
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
});

// socket.on('createEmail', (newEmail)=>{
//     console.log('New Email:', newEmail);
// });

socket.on('disconnect', ()=>{
    console.log('User was disconected');
 });
});
server.listen(port,()=>{

    console.log(`Server host on port ${port}`)
});