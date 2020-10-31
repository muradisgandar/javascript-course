// Common JS Modules

// const app = require("./module1");

// console.log(app);

// console.log(app.name);
// app.test1();
// console.log(app.person.name);
// console.log(app.person.email);


// ES 6 modules , new syntax ,new style

// import {test,Person} from "./module1";

// Person.Test();
// test();

// same thing with above

// import * as module1 from "./module1";
// console.log(module1.employee.salary);
// module1.Person.Test();


// when we have default export , when we import it we don't write destructing syntax in import state , look below:
// import Testing from "./module1";
// Testing.test();

import defaultVal from "./module1";
console.log(defaultVal);

