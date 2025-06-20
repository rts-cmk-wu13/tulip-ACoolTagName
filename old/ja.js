fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('container');
    let html = '';
    data.sections.forEach(section => {
      html += `
        <section>
          <h2>${section.title}</h2>
          <p>${section.desc}</p>
        </section>
      `;
    });
    container.innerHTML = html;
  })
  .catch(error => {
    console.error('Error:', error);
  });