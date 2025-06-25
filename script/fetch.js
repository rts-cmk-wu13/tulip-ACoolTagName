

fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {

        document.getElementById('rooms_headline-h').innerHTML = data.headline;
        document.getElementById('rooms_headline-p').innerHTML = data.text;

        data.rooms.map((element) => {


        })



    })
    .catch(error => console.error(error));







fetch('http://localhost:4000/services')
    .then(response => response.json())
    .then(data => {

        document.getElementById('services_headline-h').innerHTML = data.headline;
        document.getElementById('services_headline-p').innerHTML = data.text;

        data.services.map((element) => {


        })



    })
    .catch(error => console.error(error));







fetch('http://localhost:4000/gallery')
    .then(response => response.json())
    .then(data => {

        document.getElementById('gallery_headline-h').innerHTML = data.headline;
        document.getElementById('gallery_headline-p').innerHTML = data.text;

        data.gallery.map((element) => {


        })



    })
    .catch(error => console.error(error));







fetch('http://localhost:4000/reviews')
    .then(response => response.json())
    .then(data => {

        document.getElementById('reviews_headline-h').innerHTML = data.headline;
        document.getElementById('reviews_headline-p').innerHTML = data.text;

        data.reviews.map((element) => {


        })



    })
    .catch(error => console.error(error));





