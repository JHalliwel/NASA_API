fetch("https://api.nasa.gov/planetary/apod?api_key=2nbQg0XiqItY0fh9aHPbEOAt2yyMPjyhqujIyJDD")
    .then(res => res.json())
    .then(data => {
        console.log(data.url)
        document.querySelector('img').src = data.url

    })
    .catch(err => {
        console.log(`error ${err}`)
    });