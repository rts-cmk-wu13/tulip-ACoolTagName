fetch('structures.json')
  .then(response => response.json())
  .then(data => {
    // Select all containers with the class 'myContainer'
    const containers = document.querySelectorAll('.myContainer');
    // Insert the HTML into each container
    containers.forEach(container => {
      container.innerHTML = data.mainsections;
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });