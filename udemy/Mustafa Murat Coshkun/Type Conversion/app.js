let value;


// string conversion

value = String(123);
value = String(3.14);
value = String(true);
value = String(function(){console.log()});
value = String([1,2,3,4,5]);


value = (10).toString();


// number conversion
value = Number("123")
value = Number(null);
value = Number(undefined);
value = Number("3.14");

value = parseFloat("3.14");
value = parseInt("3");


const a = "Hello" + 34;
console.log(a);
console.log(typeof(a));


console.log(value);
console.log(typeof(value));