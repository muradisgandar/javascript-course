// Session storage

//Button choosing

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputs

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItems);


function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);  // add session storage
}

function delItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}












