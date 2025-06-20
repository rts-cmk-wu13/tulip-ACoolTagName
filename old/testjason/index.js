fetch('index.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('homel').innerHTML = data.headlineHtml;
    document.getElementById('headline').textContent = data.headline;
    document.getElementById('desc').textContent = data.description;
    document.getElementById('type').textContent = data.type;
  })
  .catch(error => {
    console.error('Error:', error);
  });

