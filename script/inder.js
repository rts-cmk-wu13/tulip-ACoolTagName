const body = document.querySelector('body'); body.id = "body";
const wrapper = document.createElement('div'); wrapper.id = "wrapper"; body.append(wrapper);

const main = document.createElement('main'); wrapper.append(main);







fetch('/data/elements.json')
    .then(response => response.json())
    .then(data => {
        data.sections.forEach((element) => {
            const mainSection = document.createElement("section");
            mainSection.id = element.id; // Give each section its unique id
            main.append(mainSection);
        });


    })
    .catch(error => console.error(error));

