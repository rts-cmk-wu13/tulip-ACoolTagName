const wrapper = document.getElementById('wrapper');
const sectionCount = 4; // Number of main sections you want

// 1. Create empty main sections
let sectionsHTML = '';
for (let i = 0; i < sectionCount; i++) {
  sectionsHTML += `<section class="page_section" id="section${i}"></section>`;
}
wrapper.innerHTML = sectionsHTML;

// 2. Insert <article> content into each main section
for (let i = 0; i < sectionCount; i++) {
  const section = document.getElementById(`section${i}`);
  if (section) {
    section.innerHTML = `
      <article>
        <section class="article_header">
          <header>
            <hgroup>
              <h2>Section </h2>
              <p>Subtitle </p>
            </hgroup>
          </header>
        </section>
        <section class="article_content">
          <p>Content for section </p>
        </section>
      </article>
    `;
  }
}