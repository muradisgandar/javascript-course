let value;

const programmer = {
    name:"Murad",
    surname:"Isgandarli",
    age:18,
    email:"muradisgenderli441@gmail.com",
    langs:["Java","C++","JavaScript"],


    adress : {
        city:"Baku"
    },

    work:function(){
        console.log("He works programmer");
    }

}


value = programmer;

value = programmer.email;  //it is recommended to use
//there are the same
value = programmer["email"];

value = programmer.langs;

value = programmer.adress.city;

programmer.work();


const programmers = [

    {name:"Murad",age:18},
    {name:"Ali",age:19}

]

value = programmers;
console.log(value);
