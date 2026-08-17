
//~  reduce - method runs a func on each array element to produce single value.
//~ accepts 2 things - (accumulator/prev_value , current_value)
//!  syntax - Array.reduce((prev/initial/accumulator,current_value){},initial value)

let arr = [1,2,3,4,5]
let sum = 0
arr.map((value)=>sum = sum +value)
console.log(sum);

//~ using reduce method () - 
let arr1 = [1,2,3,4,5]
let summ = arr1.reduce((prev,current,index)=>{
    console.log(prev);
    console.log(current);
    console.log("index is:",index);
    return prev + current
},5)  // to set initial value

let arr2 = [1,2,3,4,5]
let add = arr2.reduce((prev,current,index)=>{
    return prev + current
})
console.log(add);


//~ to get largest element in an array using reduce method().
let a = [12,2,3,4,5,28,7]
let max = a.reduce((prev,current)=> (current>prev)?current:prev)
console.log(max);

//~ to  get minimum elemnt in an array using reduce method().
let b = [12,2,3,4,5,28,7]
let min = a.reduce((prev,current)=> (current<prev)?current:prev)
console.log(min);

//~ product of elem in an array
let c = [1,2,3,4,5]
let result = c.reduce((prev,current) => (prev * current))
console.log(result);