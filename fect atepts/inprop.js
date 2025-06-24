


fetch('jatest.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('body').innerHTML = data.inprps.root; //inplanter
        //const joey = data.inprps.section_template //replacer of ${} to content
        //    .replace('${id}', data.inprps.charm.id)
        //    .replace('${title}', data.inprps.charm.title)
        //    .replace('${desc}', data.inprps.charm.desc);

        //document.getElementById('wrapper').innerHTML = joey;

        const tesst = data.inprps.test
            .replace('${test_content}', data.inprps.test_content)
            .replace('${title}', data.inprps.charm.title)
            .replace('${desc}', data.inprps.charm.desc);
       
        document.getElementById('wrapper').innerHTML = tesst;

    })
    .catch(error => console.error(error));




