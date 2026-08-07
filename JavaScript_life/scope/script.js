 
 1. //global scope

 var name='Pavithra'; 

 function MyFunction(){
    console.log(name); 
 }
MyFunction();



2. //Block scope

{
    var name='Pavithraa';
    console.log(name);
}
console.log(name); //var is not block scoped, it is function scoped. So it can be accessed outside the block as well.

{
    let Name='pavi';
    // console.log(name);
}
console.log(Name); //let is block scoped, it cannot be accessed outside the block.

{
    const Name='pavi';
    // console.log(name);
}
console.log(Name); //const is block scoped, it cannot be accessed outside the block.



//3. Function scope

function myFunction(){
    var namee="Pavithra"; //let and const are also function scoped, they cannot be accessed outside the function.

}
myFunction()
console.log(namee); //var is function scoped, it cannot be accessed outside the function.