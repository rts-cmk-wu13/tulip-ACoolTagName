Promise.all([
  fetch('jatest.json').then(res => res.json()),
  fetch('http://localhost:4000/rooms').then(res => res.json())
]).then(([data1, data2]) => {
        document.querySelector('body').innerHTML = data1.inprps.allcrabs
        document.getElementById('h2').innerHTML = data2.headline;

  console.log(data1, data2);
});