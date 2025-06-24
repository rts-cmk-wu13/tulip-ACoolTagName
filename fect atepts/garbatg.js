Promise.all([
  fetch('structure.json').then(res => res.json()),
  fetch('data.json').then(res => res.json())
]).then(([structure, data]) => {
  document.body.innerHTML = structure.structure;
  document.getElementById('main').innerHTML = `<h1>${data.headline}</h1><p>${data.desc}</p>`;
});