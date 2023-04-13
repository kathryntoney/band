const dcFetch = (url) => {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let data = JSON.parse(xhr.responseText)
                resolve(data)
            }
            else if (xhr.readyState == 4 && xhr.status !== 200) {
                reject('error in data')
            }
        }

    }) // end of promise
    return promise;
}

window.dcFetch = dcFetch;

dcFetch('https://jsonplaceholder.typicode.com/')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })