let form = document.querySelector('form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let newMessage = {
        name: document.querySelector('#message-form-name').value,
        title: document.querySelector('#message-form-title').value,
        message: document.querySelector('#message-form-message').value
    }
    let result = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(newMessage)
    })

    let messages = await result.json()
    console.log(messages);

    updateMessages(messages)
})

const updateMessages = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item, index) => {
        let timestamp = Date.now()
        let dateObj = new Date(timestamp)
        let date = dateObj.getDate()
        let month = dateObj.getMonth() + 1
        let year = dateObj.getFullYear()

        htmlBlock += '     <div class="post-container">';
        htmlBlock += '     <div class="post" id="post-name">Name: ' + item.name + '</div>';
        htmlBlock += '     <div class="post" id="post-title">Title: ' + item.title + '</div>';
        htmlBlock += '     <div class="post" id="post-message">Message: ' + item.message + '</div>';
        htmlBlock += '     <div class="post" id="post-date">Date Posted: ' + month + ' / ' + date + ' / ' + year + ' </div>';
        htmlBlock += '     <div class="post" id="post-delete" action="/messages/delete" method="post"><button class="post-delete">remove this post<span id="' + index + '" class="glyphicon glyphicon-remove"></span></button></div>';
        htmlBlock += '     </div>';

    });

    let recentMessages = document.querySelector('#recent-messages')
    recentMessages.innerHTML = htmlBlock;


}

const displayMessages = async () => { // async bc fetch call
    try {
        let result = await fetch('/api')
        let messages = await result.json();
        updateMessages(messages)
    }
    catch {

    }
}

displayMessages()

const deleteMessages = async (i) => {
    let newMessage = { index: i }
    let result = await fetch(`/api/${i}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(newMessage)
    })
    displayMessages()
}

const deleteButton = document.querySelector('#recent-messages')
deleteButton.addEventListener('click', (e) => {
    const deleteIndex = e.target.querySelector('span').getAttribute('id')
    console.log(deleteIndex);
    deleteMessages(deleteIndex)
})