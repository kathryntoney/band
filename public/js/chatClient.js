let username = document.querySelector('#chat-username')
let chatmsg = document.querySelector('#chat-message')
let chatform = document.querySelector('.chat-form')

const socket = io('http://localhost:3000')

socket.on('chatMsg', (msg) => {
    console.log(msg)
})

chatform.addEventListener('submit', (e) => {
    e.preventDefault();

    socket.emit('postMsg', {
        username: username.value,
        message: chatmsg.value
    })

    chatmsg.value = ""
    chatmsg.focus()

})

socket.on('updateMsgs', (data) => {
    console.log(data);
    showMessage(data)
})

const showMessage = (data) => {
    let chatDisplay = document.querySelector('#recent-messages')
    let newMsg = document.createElement('p')

    if (username.value === data.username) {
        newMsg.className = "user-self chat-text"
    }
    else {
        newMsg.className = "chat-text"
    }

    newMsg.innerHTML = `<strong>${data.username}</strong>: ${data.message}`
    chatDisplay.insertBefore(newMsg, chatDisplay.firstChild)
}