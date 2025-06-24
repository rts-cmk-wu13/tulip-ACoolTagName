fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {
        document.getElementById('h2').innerHTML = data.headline;


        const tesst = data.inprps.test
            .replace('${id}', data.roomtypes.id)
            .replace('${imgtype}', data.roomtypes.imagetype)
            .replace('${guests}', data.roomtypes.guests)
            .replace('${size}', data.roomtypes.size)
            .replace('${desc}', data.roomtypes.description)
            .replace('${price}', data.roomtypes.price)

        document.getElementById('wrapper').innerHTML = tesst;

    })
    .catch(error => console.error(error));

