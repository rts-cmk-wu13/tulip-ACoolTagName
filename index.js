fetch('http://localhost:4000/rooms')
  .then(response => response.json())
  .then(data => {
    document.getElementById('h2').innerHTML = data.headline;
  })
  .catch(error => console.error(error));