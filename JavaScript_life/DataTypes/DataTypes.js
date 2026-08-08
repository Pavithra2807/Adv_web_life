// Data Types in JavaScript

//1. Number
let number = 10.5;
console.log(number);
console.log(typeof(number));

//2. String
let name = "Pavithra";
console.log(name);
console.log(typeof(name));

//3. Boolean
let flag = true;
console.log(flag);
console.log(typeof(flag));

//4. Null
let data= null;
console.log(data);
console.log(typeof(data)); //object(output)

//5. Undefined
let data1;
console.log(data1);
console.log(typeof(data1));

//or

let data2 = undefined;
console.log(data2);
console.log(typeof(data2));


//6.BigInt
let largeNumber=990n;
console.log(largeNumber);
console.log(typeof(largeNumber));

//7. Symbol
let data3=Symbol("Hello");
let data4=Symbol("Hello");
console.log(data3 == data4);
console.log(typeof(data3));
