

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

        const servicesCInfoArea = document.getElementById('services_content-info_area');

        data.facilities.map((element) => {

            const sectionInfo = document.createElement('section'); servicesCInfoArea.append(sectionInfo);
            const infoDiv = document.createElement('div'); sectionInfo.append(infoDiv);
            const h2 = document.createElement('h2'); infoDiv.append(h2); h2.innerHTML = element.name;
            const p1 = document.createElement('p'); infoDiv.append(p1); p1.innerHTML = element.text1;
            const p2 = document.createElement('p'); infoDiv.append(p2); p2.innerHTML = element.text2;
            const imgframe = document.createElement('div'); sectionInfo.append(imgframe);
            const img = document.createElement('img'); imgframe.append(img); img.src = element.image


        })

    })
    .catch(error => console.error(error));




fetch('http://localhost:4000/spots')
    .then(response => response.json())
    .then(data => {

        const servicesCCardArea = document.getElementById('services_content-cards_area');

        data.map((element) => {

            const sectionCards = document.createElement('section'); servicesCCardArea.append(sectionCards)
            const img = document.createElement('img'); sectionCards.append(img); img.src = element.icon;
            const h2 = document.createElement('h2'); sectionCards.append(h2); h2.innerHTML = element.name;
            const p = document.createElement('p'); sectionCards.append(p); p.innerHTML = element.text;





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





