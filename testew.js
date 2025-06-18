// Assume your JSON is loaded into a variable called data
const template = data.pageSections[0].page_section_tamplet;
const sectionIds = data.pageSections[1].page_section_ids;

// Example: Insert each ID into the template for each section
Object.values(sectionIds).forEach(id => {
  // Replace the id='' in the template with the actual id
  const sectionHtml = template.replace("id=''", `id='${id}'`);
  // Now sectionHtml contains the template with the correct id
  // You can insert sectionHtml into your page as needed
  document.body.innerHTML += sectionHtml; // Example insertion
});


const template = data.page_Sections[0].page_section_tamplet;
const sectionIds = Object.values(data.page_Sections[1].page_section_ids);

sectionIds.forEach(id => {
  // Replace ${id} with the actual id value
  const sectionHtml = template.replace('${id}', id);
  // Now you can use sectionHtml as needed
  document.body.innerHTML += sectionHtml;
});