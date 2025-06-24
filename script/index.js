



document.createElement("article")




fetch('http://localhost:4000/rooms')
    .then(response => response.json())
    .then(data => {
        const secArtic = document.createElement("article");
        const roomSec = document.getElementById('rooms');
        roomSec.append(secArtic);
        // console.log(data.roomtypes);
        





        data.roomtypes.map((element) => {



        })


    })
    .catch(error => console.error(error));



fetch('http://localhost:4000/services')
    .then(response => response.json())
    .then(data => {


        // console.log(data.roomtypes);
        data.roomtypes.map((element) => {









        })


    })
    .catch(error => console.error(error));



fetch('http://localhost:4000/spots')
    .then(response => response.json())
    .then(data => {


        // console.log(data.roomtypes);
        data.roomtypes.map((element) => {



        })


    })
    .catch(error => console.error(error));



fetch('http://localhost:4000/gallery')
    .then(response => response.json())
    .then(data => {


        // console.log(data.roomtypes);
        data.roomtypes.map((element) => {



        })


    })
    .catch(error => console.error(error));