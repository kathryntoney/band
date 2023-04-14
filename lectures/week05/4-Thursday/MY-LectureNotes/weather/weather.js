let temp = document.querySelector('#temp')
let humidity = document.querySelector('#humid')

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=d4c53c8e87cc5cb56168a28602ac5584&units=imperial'
fetch(url)
    .then(results => results.json())
    .then(data => {
        // console.log(data);
        // console.log(data.main.temp); // temp is in Kelvins
        // let degK = data.main.temp
        // let degC = degK - 273.15;
        // let degF = Math.floor((degC * 1.8) + 32)
        let temp = document.querySelector('#temp')
        temp.textContent = Math.floor(data.main.temp.toString());
        humidity.textContent = data.main.humidity;
    })
    .catch(err => {
        console.log(err);
    })