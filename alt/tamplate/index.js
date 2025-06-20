fetch("template.json")
.then(response => response.json())
.then(data => {
    const linehead = document.getElementById("logograf");
    linehead.innerHTML = data.ta



    