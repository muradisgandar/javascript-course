// New element added to html page


const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://google.com";
newLink.target = "_blank";

//Text Content

// newLink.textContent = "Ferqli sehifeye get"; // this is dangerous way , because other childs will disappear

//Text Node

newLink.appendChild(document.createTextNode("Go to page"));
cardbody.appendChild(newLink);

console.log(cardbody);