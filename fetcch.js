fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) {
        el.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.desc}</p>
        `;
      }
    });
  });