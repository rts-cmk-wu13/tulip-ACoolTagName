fetch('letouts.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('body').innerHTML = data.fundementals;
    document.getElementById('header').innerHTML = data.header;
    document.querySelector('main').innerHTML = data.page_section;
    

  })
  .catch(error => console.error(error));