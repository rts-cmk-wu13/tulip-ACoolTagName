fetch('/data/elements.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('body').innerHTML = data.root;
    document.getElementById('wrapper').innerHTML = data.primal;
    document.getElementById('header').innerHTML = data.header;


    data.sections.map((element) => {
      const main = document.querySelector('main');
      const pageSections = document.createElement("section")
      pageSections.id = section.id;
      main.append(pageSections);
    })



    // Set the image URL as the src of the img element


    document.getElementById('rooms').innerHTML = data.page_section;
    document.getElementById('services').innerHTML = data.page_section;
    document.getElementById('gallery').innerHTML = data.page_section;
    document.getElementById('ratting').innerHTML = data.page_section;
    document.getElementById('footer').innerHTML = data.footer;



  })
  .catch(error => console.error(error));




