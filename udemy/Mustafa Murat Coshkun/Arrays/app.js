let value;

const numbers = [34,45,76,12,98,67,23,98,14];


// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++"];

const a = ["Hello",23,null,undefined,3.45];

value = numbers.length;

value = numbers[0];
value = numbers[numbers.length - 1];


value = numbers.indexOf(76);

//Append element to end of array
numbers.push(2000);

//Append element to starting of array
numbers.unshift(57890);

//Remove element from end of array
numbers.pop();

//Remove element from starting of array
numbers.shift();

//Remove element from one index to another index of array
numbers.splice(0,3);

//revers
numbers.reverse();

value = numbers;


//sorting for only charachter of number,for example [76,23,9] is sorted to [23,76,9]
value = numbers.sort();

//sorting from small to big
value = numbers.sort(function(x,y){
    return x-y;
});

//sorting from big to small
value = numbers.sort(function(x,y){
    return y-x;
});

console.log(value);