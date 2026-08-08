//Hoisting

console.log(Namee); //undefined
var Namee = "Pavithra"; 

console.log(NName);
let NName = "Pavithra"; //ReferenceError: Cannot access 'NName' before initialization

console.log(NNamee);
const NNamee = "Pavithra"; //ReferenceError: Cannot access 'NNamee' before initialization.
