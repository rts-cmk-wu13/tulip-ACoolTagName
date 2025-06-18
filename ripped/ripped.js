const template = data.page_Sections[0].page_section_tamplet;
const sectionIds = Object.values(data.page_Sections[1].page_section_ids);

sectionIds.forEach(id => {
  // Replace ${id} with the actual id value
  const sectionHtml = template.replace('${id}', id);
  // Now you can use sectionHtml as needed
  document.body.innerHTML += sectionHtml;
});