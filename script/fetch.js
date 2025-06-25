

fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {

        document.getElementById('rooms_headline-h').innerHTML = data.headline;
        document.getElementById('rooms_headline-p').innerHTML = data.text;

        data.rooms.map((element) => {


        })



    })
    .catch(error => console.error(error));







fetch('http://localhost:4000/spots')
    .then(response => response.json())
    .then(data => {

        document.getElementById('services_headline-h').innerHTML = data.headline;
        document.getElementById('services_headline-p').innerHTML = data.text;
        const servicesCIA = document.getElementById('services_content-info_area');
        const servicesCCA = document.getElementById('services_content-cards_area');
        
        data.map((element) => {


            const sectionI = document.createElement('section'); servicesCIA.append(sectionI)





            const sectionC = document.createElement('section'); servicesCCA.append(sectionC)
            const img = document.createElement('img'); sectionC.append(img);
            const h2 = document.createElement('h2'); sectionC.append(h2); 
            const p = document.createElement('p'); sectionC.append(p);
            console.log(sectionC);
            img.src = element.icon
            h2.innerHTML = element.name
            p.innerHTML = element.text

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





