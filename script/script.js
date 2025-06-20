fetch('/data/elements.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('body').innerHTML = data.root;
    document.getElementById('wrapper').innerHTML = data.primal;
    document.getElementById('header').innerHTML = data.header;
    document.getElementById('rooms').innerHTML = data.page_section;
    document.getElementById('services').innerHTML = data.page_section;
    document.getElementById('gallery').innerHTML = data.page_section;
    document.getElementById('ratting').innerHTML = data.page_section;
    document.getElementById('footer').innerHTML = data.footer;
    

  })
  .catch(error => console.error(error));




  