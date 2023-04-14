
let title = document.querySelector('#title')
let year = document.querySelector('#year')
let type = document.querySelector('#type')
let poster = document.querySelector('#poster')

let url = ('http://www.omdbapi.com/?s=wick&apikey=e49db000');
fetch(url)
    .then(results => results.json())
    .then(data => {
        for (val of data.Search) {
            console.log(val.Title);
            var movieList = document.querySelector('.container')
            var movie = document.createElement('div');
            movie.setAttribute('class', 'movie')
            movie.setAttribute('id', val.imdbID)
            // console.log(movie.id);
            movie.textContent = val.Title;
            var thumbnailDiv = document.createElement('div')
            movie.append(thumbnailDiv)
            var thumbnail = document.createElement('img')
            thumbnail.setAttribute('src', val.Poster)
            thumbnail.setAttribute('class', 'thumbnail')
            thumbnail.setAttribute('id', val.imdbID)
            thumbnailDiv.append(thumbnail)
            movieList.append(movie)
            movie.addEventListener('click', function (e) {
                for (let i = 0; i < data.Search.length; i++) {
                    if (e.target.id == data.Search[i].imdbID) {
                        poster.innerHTML = "";
                        title.textContent = `Title: ` + `${data.Search[i].Title}`;
                        year.textContent = `Year: ${data.Search[i].Year}`;
                        type.textContent = `Type: ${data.Search[i].Type}`;
                        var getPoster = document.createElement('img')
                        getPoster.setAttribute('id', 'posterImg')
                        getPoster.setAttribute('src', data.Search[i].Poster)
                        poster.appendChild(getPoster)
                    }
                }
            })
        }
    })






