fetch('/data/elements.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('tester').innerHTML = `
      <h1>${test.headline}</h1>
      <p>${test.desc}</p>
    `;
  });


  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.sections.forEach((section, i) => {
      const el = document.getElementById(`section${i + 1}`);
      if (el) {
        el.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.desc}</p>
        `;
      }
    });
  });