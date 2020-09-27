            //forEach using
// let langs = ["Java","JS","C++"];

// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });

            // map function using
const users = [
    {name:"Murad",age:18},
    {name:"ASDFGG",age:34},
    {name:"wegeg",age:23}

];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){
    return user.age;
});

// console.log(names);
// console.log(ages);

            //for in lopp
const user = {
    name:"Murad",
    age:18
};

for(let key in user){
    console.log(key,user[key]);
}





















