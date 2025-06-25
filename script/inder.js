const body = document.querySelector('body');
const wrapper = document.createElement('div'); wrapper.id = "wrapper"; body.append(wrapper);
const main = document.createElement('main'); wrapper.append(main);







fetch('/data/elements.json')
    .then(response => response.json())
    .then(data => {
        data.sections.forEach((element) => {



            const mainSection = document.createElement("section"); mainSection.id = element.id; mainSection.classList.add("page_section"); main.append(mainSection);
            






        });




    })
    .catch(error => console.error(error));

