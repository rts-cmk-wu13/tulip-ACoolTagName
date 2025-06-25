const body = document.querySelector('body');
const wrapper = document.createElement('div'); wrapper.id = "wrapper"; body.append(wrapper);
const main = document.createElement('main'); wrapper.append(main);







fetch('/data/elements.json')
    .then(response => response.json())
    .then(data => {
        data.sections.forEach((element) => {
            const mainSection = document.createElement("section"); mainSection.id = element.id; mainSection.classList.add("page_section"); main.append(mainSection);



        });

        const getRooms = document.getElementById("rooms"); const roomsArticle = document.createElement("article"); roomsArticle.classList.add("page_section-article"); getRooms.append(roomsArticle);
        roomsArticle.innerHTML = `
        <header><hgroup><h2 id="rooms_headline-h"></h2><p id="rooms_headline-p"></p></hgroup></header><section id="rooms_content" class="page_section-subsection_content"></section>`;

        const getServices = document.getElementById("services"); const servicesArticle = document.createElement("article"); servicesArticle.classList.add("page_section-article"); getServices.append(servicesArticle);
        servicesArticle.innerHTML = `
        <header><hgroup><h2 id="services_headline-h"></h2><p id="services_headline-p"></p></hgroup></header><section id="services_content" class="page_section-subsection_content"></section>`;

        const servicesContent = document.getElementById('services_content');
        servicesContent.innerHTML = `
        <div id="services_content-info_area"></div>
        <div id="services_content-cards_area"></div>`






        const getGallery = document.getElementById("gallery"); const galleryArticle = document.createElement("article"); galleryArticle.classList.add("page_section-article"); getGallery.append(galleryArticle);
        galleryArticle.innerHTML = `
        <header><hgroup><h2 id="gallery_headline-h"></h2><p id="gallery_headline-p"></p></hgroup></header><section id="gallery_content" class="page_section-subsection_content"></section>`;

        const getReviews = document.getElementById("reviews"); const reviewsArticle = document.createElement("article"); reviewsArticle.classList.add("page_section-article"); getReviews.append(reviewsArticle);
        reviewsArticle.innerHTML = `
        <header><hgroup><h2 id="reviews_headline-h"></h2><p id="reviews_headline-p"></p></hgroup></header><section id="reviews_content" class="page_section-subsection_content"></section>`;













    })
    .catch(error => console.error(error));
