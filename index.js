const express = require('express');
const bodyParser = require('body-parser')
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var clientList = {};
app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist' ));

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/dist/index.html');
});

app.post('/login', function(req, res) {  
    try {
        let body = req.body;
        let remoteIp = req.connection.remoteAddress;
        
        if(Object.keys(clientList)
                .filter(ip => ip !== remoteIp)
                .find(
                    ip => {
                        clientList[ip] === body.nickname
                    })) {

            let responseData = JSON.stringify({
                error: true,
                msg  : 'Nickname taken. Please choose another'
            });
            res.send(responseData);
        } else {            
            clientList[remoteIp] = body.nickname;
            res.send('{ error: false }');
        }
    }

    catch(err) {
        let responseData = JSON.stringify({
            error: true,
            msg  : 'An error has occurred!'
        });
        res.send(responseData);
    }     
});

app.post('/logout', function(req, res) {  
    try {
        delete clientList[req.connection.remoteAddress];
        res.send('{ error: false }');
    }
    catch(err) {
        let responseData = JSON.stringify({
            error: true,
            msg  : 'An error has occurred!'
        });
        res.send(responseData);
    }
});

app.post('/checkIfLoggedIn', function(req, res) { 
    let flag = false; 

    if( clientList[req.connection.remoteAddress] ) {
        flag = true;
    }
    let responseData = JSON.stringify({
        data: flag
    });
    res.send(responseData);
});

io.on('connection', function(socket) {  
    socket.on('client_message', function(data) {
        let messageData = JSON.stringify({ message : data,
                                           name    : clientList[socket.handshake.address] });                                        
        io.emit('server_message', messageData);
    });
    socket.on('login', function(data) {
        if(Object.values(clientList).find(client => {
          client == data;  
        })) {
            socket.emit('error');
        } else {
            clientList[socket.handshake.address] = data;
        }
    });
    socket.on('disconnect', function() {
        delete clientList[socket.handshake.address];
    });
});


server.listen(8080);  