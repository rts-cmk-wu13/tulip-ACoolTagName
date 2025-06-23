fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('container');
    let html = '';
    data.sections.forEach(section => {
      html += `
        <section id="section${section.id}">
          <h2>${section.title}</h2>
          <p>${section.desc}</p>
        </section>
      `;
    });
    container.innerHTML = html;
  });