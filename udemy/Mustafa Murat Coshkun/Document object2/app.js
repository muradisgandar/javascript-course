var value;

value = document;

//Scripts

value = document.scripts; // returns all javascript scripts which are used in html
value = document.scripts.length;
value = document.scripts[0];

//Links

value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];

value = document.links[document.links.length-1].getAttribute("class");  //return class
value = document.links[document.links.length-1].getAttribute("href"); // returns href link
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].classList; // get all classes in one <a></a> tag


//Forms
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"]; // form which name is form will be got

value = document.forms[0].getAttribute("id"); //return id's value
value = document.forms[0].id;

value = document.forms[0].name;
value = document.forms[0].getAttribute("name");

value = document.forms[0].method; // returns method(get,post) of form

console.log(value);