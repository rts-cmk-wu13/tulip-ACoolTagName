fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Use template literals and ${} to insert data
    document.body.innerHTML = `
      <h1>${data.headline}</h1>
      <p>${data.desc}</p>
    `;
  });