const name = "Murad";
const surname = "Isgandarli";
const age = 18;

// const a = "Name: "+name+"\n"+"Surname: "+surname+"\n"+"Age: "+age; // it is not useful way


// const a = `Name:${name}\nSurname:${surname}\nAge:${age}`; // it is wery useful way and equavialent to above one


// const html = "<ul> "+
//              "<li>" + name + "</li>"+
//              "<li>" + surname + "</li>"+
//              "<li>" + age + "</li>"+
//              "</ul>";

function a(){
    return "Hello";
}

const html = `
        <ul>
        <li>${name}</li>
        <li>${surname}</li>
        <li>${age}</li>
        <li>${10/4}</li>
        <li>${a()}</li>
        </ul>
        `;


// console.log(a);


document.body.innerHTML = html;



