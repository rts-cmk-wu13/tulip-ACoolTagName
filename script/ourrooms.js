//const mainSection = document.createElement("section");
//mainSection.id = element.id; mainSection.classList.add("page_section");
//main.append(mainSection);
//const roomsSection = document.getElementById("rooms");
//const secArt = document.createElement("article");
//secArt.classList.add("page_section-article");
//roomsSection.append(secArt)
//secArt.innerHTML = `<h2></h2><p></p>`;

fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {







        data.roomtypes.map((element) => {





        })


    })
    .catch(error => console.error(error));

