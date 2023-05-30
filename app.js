const express = require('express');
const router = express.Router()
let app = express();
const io = require('socket.io')()
let PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/messages'))
app.use(require('./routes/chat'))

const server = app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})

io.attach(server)

io.on('connection', (socket) => {
    socket.emit('chatMsg', { msg: "hello from the back end" })
    socket.on('postMsg', (data) => {
        console.log(data);
        io.emit('updateMsgs', data)
    })

    socket.on('disconnect', (user) => {
        io.emit('user has left the room')
    })
})

module.exports = router;