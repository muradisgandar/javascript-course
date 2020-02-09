
// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// Destructing
// [number1,number2] = arr; // we define variables before


// const [number1,number2] = arr;  // we don't define variables before

// console.log(number1,number2);

// Object Destructing

const numbers = {
    a : 10,
    b : 20,
    c : 30,
    d : 40,
    e : 50
};

// const {a,c,e} = numbers;

// console.log(a,c,e);

// const {a:number1,c:number2,e:number3} = numbers;  // here we define alias for parameters and use it

// console.log(number1,number2,number3);

        // Function Destructing

// const getLangs = () => ["Python","Java","C++"];

// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1,lang2,lang3);

// Object

const person = {
    name : "Murad",
    surname : "Isgandarli",
    age : 18,
    showInfos : () => console.log("Downloaded...")
}

const {name : ad,surname : soyad,age : yash , showInfos : goster} = person;

console.log(ad,soyad,yash,goster);













