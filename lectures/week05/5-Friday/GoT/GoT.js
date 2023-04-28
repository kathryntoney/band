let modalBody = document.querySelector('.modal-body')
let modalTitle = document.querySelector('.modal-title')
let modalFooter = document.querySelector('.modal-footer')
modalBody = "";
let charList = document.querySelector('#charList');
let houseArr = [];
let charArr = [];
// var exampleModal = new bootstrap.Modal(document.getElementById('#exampleModal'), {
//     keyboard: false
// })

let fetchHouses = [];
let urlHouses = "";
for (let page = 1; page < 10; page++) {
    urlHouses = fetch(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=50`)
    fetchHouses.push(urlHouses)
}
let promiseHouses = Promise.all(fetchHouses)
promiseHouses.then(resultsArr => {
    return Promise.all(resultsArr.map(house => {
        return house.json();
    }))
})
    .then(dataArr => {
        // console.log(dataArr);
        for (let i = 0; i < dataArr.length; i++) {
            for (let j = 0; j < dataArr.length; j++) {
                if (dataArr[i][j].swornMembers != []) {
                    houseArr.push(dataArr[i][j])
                }
            }
        }
    })


let fetchNames = [];
let urlNames = "";
for (let page = 1; page < 45; page++) {
    urlNames = fetch(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=50`)
    fetchNames.push(urlNames)
}

let promiseNames = Promise.all(fetchNames)
promiseNames.then(resultsArr => {
    return Promise.all(resultsArr.map(char => {
        return char.json()
    }))
})
    .then(dataArr => {
        for (let i = 0; i < dataArr.length; i++) {
            for (let j = 0; j < dataArr.length; j++) {
                if (dataArr[i][j].name != "") {
                    charArr.push(dataArr[i][j])
                    // console.log(charArr);
                    let charInfo = document.createElement('div');
                    charInfo.setAttribute('class', 'charInfo')
                    charList.append(charInfo)
                    let charName = document.createElement('div');
                    charName.setAttribute('class', 'charName');
                    charInfo.setAttribute('class', `${dataArr[i][j].name}`)
                    charInfo.append(charName);
                    charName.textContent = `Name:  ${dataArr[i][j].name}`;
                    charInfo.setAttribute('id', `${[dataArr[i][j].allegiances]}`)
                    console.log(dataArr[i][j].allegiances);
                    let charHouse = document.createElement('div')
                    charHouse.setAttribute('class', 'charHouse')
                    charInfo.append(charHouse)
                    // console.log(dataArr[i][j].url);
                    charHouse.textContent = (`House(s):  ${dataArr[i][j].allegiances.length}`)
                    charInfo.addEventListener('click', (e) => {
                        console.log(e.target.id);
                        let url = e.target.id;
                        fetch(url)
                            .then(results => results.json())
                            .then(data => {
                                console.log(data);
                                modalTitle.textContent = e.target.tag;
                                console.log(e.target.tag);
                                modalBody.textContent = data.name;
                            })
                    })

                }
            }
        }
    })







