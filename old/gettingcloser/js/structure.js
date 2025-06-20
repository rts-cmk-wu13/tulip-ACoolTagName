fetch('structurestoo.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('wrapper').innerHTML = data.mainheader;
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });