
    fetch('http://localhost:4000/services')
        .then(response => response.json())
        .then(data => {
            // Access the correct properties
            const headlineH = document.getElementById('services_headline-h');
            const headlineP = document.getElementById('services_headline-p');
            if (headlineH) headlineH.innerHTML = data.services.headline;
            if (headlineP) headlineP.innerHTML = data.services.text;

            // If you want to show facilities, for example:
            if (Array.isArray(data.services.facilities)) {
                const servicesSection = document.getElementById('services');
                data.services.facilities.forEach(facility => {
                    const div = document.createElement('div');
                    div.textContent = facility;
                    servicesSection.appendChild(div);
                });
            }
        })
        .catch(error => console.error(error));