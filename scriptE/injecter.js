const body = document.querySelector("body");
const wrapper = document.createElement('div'); wrapper.id = "wrapper"


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

            const jam = document.createElement("section").src = data.roomtypes[0].image;



        })
        // Set the image URL as the src of the img element
        document.getElementById('img').src = data.roomtypes[0].image;
        document.getElementById('img').alt = data.headline;



    })
    .catch(error => console.error(error));