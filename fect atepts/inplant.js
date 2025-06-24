fetch("")
.then(Response => Response.json())
.then(data => {
    let someName = document.createElement("section")
    someName.innerHTML = data..map( => `
        <a href=".html?id=${.id}">
        ${.title}
        </a>`).join("")
        document.querySelector("#root").append(someName)
})