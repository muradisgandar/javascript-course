let value;


const now = new Date();

const date1 = new Date(2001, 02, 12, 6, 15, 02);

const date2 = new Date("february 12, 2001 06:15:02");


//pattern must be this form : mm/DD/YYYY
const date3 = new Date("2/12/2001");


value = date1.getMonth(); //return 2 

value = date2.getMonth(); //return 1 because january is considered 0 in this form
value = date3.getMonth(); //return 1 because january is considered 0 in this form


value = date1.getDate(); //returns day of month
value = date1.getDay(); // return number of day of week, for example monday is 1 (sunday is considered 0)

value = date1.getHours();
value = date1.getMinutes();


date1.setMonth(7);
date1.setDate(12);
date1.setFullYear(2002);
date1.setHours(0);
date1.setMinutes(20);
date1.setSeconds(30);

value = date1;

console.log(value);