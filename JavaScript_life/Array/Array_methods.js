//! Array---multiple values stored in a single variable.

//~ Homogenous
let arr = [1,2,3,4,5]
console.log(arr);

//~ Heterogenous
let arr1=[1,2,3,"pavithra",true,function(){ console.log("Hello!")}]
console.log(arr1);

//~ Array constructor
let array = new Array(1,2,3,4,5)
console.log(array);

let array1 = new Array(4)
console.log(array1); //? output : [ <4 empty items> ] single value - considered as length of an array

//! To access elements of an array.

//~ 1. indexing
let arrr = [1,2,3,4,5]
console.log(arrr[3]);

//~ 2. length
let array2 = [1,2,3,4,5]
console.log(array2.length);

//~ 3. to access last element using length
let array3 = [1,2,3,4,5]
console.log(array3[array3.length-1]);


//! static method in array (deals with classes)

//& 1. Array.from() ('from' works only with iterable data)
let data = Array.from("Pavithra")
console.log(data);

let data1 = Array.from({
    name:"Paavithraa",
    age:21
})
console.log(data1); //? output: [] 

//& 2. Array.isArray() - checks if a given value is array or not.
let data2 = []
console.log(Array.isArray(data2)); //? op:true

let data3 = "helooo"
console.log(Array.isArray(data3)); //? op:false

//& 3. Array.of() - helps to create new array.
let data4 = Array.of(1,2,3,4,5)
console.log(data4);

let data5 = Array.of(1)
console.log(data5); //? single vlaue - considered as item of an array & not length.


//! Instance method of an array----

//& 1. push() - add element at the end of an array.
let a = [10,20,30,40,50]
a.push("Hiii")
console.log(a);

//& 2. pop() - removes element at the end of an array.
let b = [10,20,30,40,50,"hiii"]
b.pop()
console.log(b);

//& 3. shift() - Removes 1st element.
let c = [10,20,30,40,50]
c.shift()
console.log(c);

//& 4. unshift() - adds element at the start.
let d = [10,20,30,40,50]
d.unshift("hiii")
console.log(d);

//& 5. slice() -
//! syntax - (startindex,endindex)- returns new array.
let aa = [10,20,30,40,50]
let newArray = aa.slice(3) //? op: [40,50]
console.log(newArray);

//& 6. splice() - change content of array by removing, replacing, or adding Elements
//! syntax : (startIndex , deleteCount,[value1,....])
// returns item which is deleted
// works with original array & doesnt return new array

let s = [1,2,3,4,5]
let deleted = s.splice(2,1,"pavithra")
console.log(deleted);
console.log(s);

//& 7. concat() - 
let a1 = ["Hello"]
let a2 = ["World"]
console.log(a1.concat(a2,['pavithra','636292']));

//& 8. reverse() -  reverse order of an element in an array & it modifies original array, deosn't return new array.
let b1 = ['Good', 'Morning']
console.log(b1.reverse());

//& 9. join() - converts array to string.
let c1 = [1,2,3,4,5]
let c2 = c1.join("~")
console.log(c2); //? op: 1,2,3,4,5
console.log(typeof c2); //? op: string

//& 10. indexOf() - 
let d1 = [1,2,3,3,4,5] 
console.log(d1.indexOf(3)); //? op: 2
console.log(d1.indexOf(5,7)); //? op: -1

//& 11. lastIndexOf() - 
let e1 = [1,2,3,4,4,5]
console.log(e1.lastIndexOf(4));

//& 12. includes () -
let f1 = ['Good','Evening','afternoon','night','morning']
console.log(f1.includes('Good')); //?op : true

//& 13. entries() - gives normal array in an interator method() - key:value pairs ---> (key:index)
for(let data of f1.entries()){
    console.log(data);
}

//& to fetch only values.
for(let data of f1.values()){
    console.log(data);
}

//& to fetch only keys.
for(let data of f1.keys()){
    console.log(data);
}


//& 14. sort() - sorts in ascending or descending order based on ascii values.
let colors = ['red','black','white','velvet','maroon']
let num = [1,6,4,7,1,0]
console.log(colors.sort());
console.log(num.sort()); 

let numbers = [1,34,56,23,5,776,5]
console.log(numbers.sort((a,b)=>a-b)); //logic : if a-b<0 --> a/b , a-b>0 --> b/a

//& 15 find() -
let numbers1 = [1,34,56,23,5,776,5]
console.log(numbers1.find((numbers1)=>numbers1>56))

