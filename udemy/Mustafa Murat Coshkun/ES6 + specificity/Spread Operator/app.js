// Spread Operator

// const langs = ["Java","Python","C++","PHP"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

// console.log(...langs);    // spread operator is used ... langs

// const langs2 = ["JS","C#",langs[0],langs[1],langs[2],langs[3]];
// const langs2 = ["JS","C#",...langs];


// console.log(langs2);

// const numbers = [1,2,3,4,5,6,7,8,9];

// const [a,b,...numbers2] = numbers;

// console.log(a,b);
// console.log(numbers2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(...numbers);



