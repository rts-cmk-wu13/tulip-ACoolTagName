const wrapper = document.querySelector("#wrapper")

fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {

        // console.log(data.roomtypes);

        data.roomtypes.map((element) => {
            let figure = document.createElement("figure")
            let thisImg = document.createElement("img");
            wrapper.append(figure)
            figure.append(thisImg)
            thisImg.src = element.image

            const nut = document.querySelector("#nut");
            const jam = document.createElement("img").src = data.roomtypes[0].image;



        })
        // Set the image URL as the src of the img element
        document.getElementById('img').src = data.roomtypes[0].image;
        document.getElementById('img').alt = data.headline;



        const hito = document.createElement('div'); hito.id = "hito"; wrapper.append(hito); hito.innerHTML = `
            <p>hitohito</p>`;
    })
    .catch(error => console.error(error));


const naaw = document.createElement('div')
const upper = document.querySelector('#upper')
naaw.id = "naaw";
upper.append(naaw)
const york = document.createElement('div'); york.id = "york"; upper.append(york); york.innerHTML = `
<header><hgroup><h3></h3>
<p></p></hgroup></header>
<footer><p></p></footer>`;

const punk = document.createElement('div'); punk.id = "punk"; upper.append(punk)
