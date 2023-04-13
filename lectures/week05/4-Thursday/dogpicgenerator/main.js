
// api endpoint
// https://dog.ceo/api/breeds/image/random

// 1. when button is clicked, make fetch call
// 2. add event to the button
// 3. when button is clicked, make a fetch call
// 4. grab the new image from the fetch call
// 5. update the image source with new image from the api call

let button = document.querySelector('#btn')
let pic = document.querySelector('#photo')
button.addEventListener('click', () => {
    let url = 'https://dog.ceo/api/breeds/image/random'
    fetch(url)
        .then(results => results.json())
        .then(data => {
            // let dogpic = data.message;
            pic.src = data.message;
        })
})