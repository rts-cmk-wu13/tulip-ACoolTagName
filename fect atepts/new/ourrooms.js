document.addEventListener("DOMContentLoaded", () => {
    // Wait for the element to exist
    function waitForHeadline() {
        const roomsHeadlineH = document.getElementById("rooms_headline-h");
        if (roomsHeadlineH) {
            console.log(roomsHeadlineH);
            // Now you can safely use it!
        } else {
            setTimeout(waitForHeadline, 50); // Try again in 50ms
        }
    }
    waitForHeadline();
});



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



document.addEventListener('structureReady', () => {
});