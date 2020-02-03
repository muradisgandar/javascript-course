let value;

const name = "Murad";

const surname = "Isgandarli";

const langs = "Java,Python,JavaScript";

value = name+" "+surname;

value = name.length;

value = name.concat(" "+surname+ " Kamran");


value = name.toUpperCase();
value = name.toLowerCase();

// value = name[0];

value = name.charAt(0);


value = name.indexOf("r");
value = name.indexOf("R"); //it gives -1 ,because this symbol is not in name string

value = langs.split(",");


value = langs.replace("Java","Spring");

value = langs.includes("Java");

console.log(value);
