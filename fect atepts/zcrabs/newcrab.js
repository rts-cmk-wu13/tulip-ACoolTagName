

fetch('jatest.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('body').innerHTML = data.inprps.fish;

    })
    .catch(error => console.error(error));


