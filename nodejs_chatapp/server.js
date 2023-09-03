const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socket) => {
    console.log('ユーザが接続しました');
    socket.on('chat message',(msg)=>{
        //console.log('メッセージ：' + msg);
        io.emit('chat message',msg);
    });
});

server.listen(PORT,()=>{
    console.log('listening on 3000');
});