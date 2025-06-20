fetch('letouts.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('body').innerHTML = data.fundementals;
    document.getElementById('header').innerHTML = data.header;
    document.querySelector('main').innerHTML = data.page_section;
    
    document.getElementById('fn').innerHTML = data.name.first;
    document.getElementById('mn').innerHTML = data.name.middle;
    document.getElementById('ln').innerHTML = data.name.last;
    document.getElementById('nt').innerHTML = data.name.title;

  })
  .catch(error => console.error(error));

fetch('http://localhost:4000/hero')
  .then(response => response.json())
  .then(data => {
    document.getElementById('headline').innerHTML = data.headline;
  })
  .catch(error => console.error(error));


