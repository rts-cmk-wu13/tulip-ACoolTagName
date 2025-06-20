fetch('http://localhost:4000')
  .then(response => response.json())
  .then(data => {
    document.getElementById('h2').innerHTML = data.rooms.headline;
  
    console.log(data); // Use your API data here
  })
  .catch(error => console.error(error));