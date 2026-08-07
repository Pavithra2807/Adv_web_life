// 1. var

var a;                    //declaration (creating a var withou givimg it a value   )
console.log(a);

a=10;                    //Initialization (giving/assigning a value to the var)
console.log(a)

var a;                  //Re-declaration (declaring a same variable again using var keyword)
var a=100; 
console.log(a)

var a;                 //Re-Initialization (giving a new value to an already declared variable)
a=40;
console.log(a)    


//2. let

let b;                 //declaration
console.log(b)    

b=10;                 //Initialization
console.log(b)

// let b;            //Re-declaration is not possible
// let b=20;
// console.log(b);

b=30;
console.log(b);     //Re-Initialization



//3.const

const c=10;        //declaration + initialization at the same time(same line).
console.log(c); 

const c=12;       //Re-declaration & Re-Initialization is not possible.
console.log(c);