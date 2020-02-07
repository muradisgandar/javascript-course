const cardbody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

//Click event
// title.addEventListener("click",run);
//Double click
// title.addEventListener("dblclick",run);

//Mouse Down
// title.addEventListener("mousedown",run);    //it is similiar with click event
//Mouse Up
// title.addEventListener("mouseup",run);   //it is similiar with keyup event

//Mouse Over
// title.addEventListener("mouseover",run);
// //Mouse Out
// title.addEventListener("mouseout",run);


// cardbody.addEventListener("mouseover",run);
// cardbody.addEventListener("mouseout",run);

//Mouse enter and mouse leave

cardbody.addEventListener("mouseenter",run);
cardbody.addEventListener("mouseleave",run);



function run(e){
    console.log(e.type);
}



