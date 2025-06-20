fetch('index.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('wrapper').innerHTML = data.pagestructuresection;  
})
  .catch(error => {
    console.error('Error:', error);
  });








