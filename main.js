fetch("https://api.nasa.gov/planetary/apod?api_key=gWlocK7QkchUzLF522ui8j6svje1FDXpWbRPcan5")
    .then(res => res.json())
    .then(data => {
        console.log(data.url)
        document.querySelector('img').src = data.url

    })
    .catch(err => {
        console.log(`error ${err}`)
    });