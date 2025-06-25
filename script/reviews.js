

fetch('http://localhost:4000/reviews')
    .then(response => response.json())
    .then(data => {


        // console.log(data.roomtypes);
        data.roomtypes.map((element) => {



        })


    })
    .catch(error => console.error(error));
