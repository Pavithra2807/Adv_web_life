//& sort number in descending order.
let a = [1,67,34,90,21]
console.log(a.sort((a,b)=>b-a));

//& find largest number using sort.
let b = [12,34,56,75,34]
console.log(b.sort((a,b)=>a-b)[b.length-1]);

//~ or
console.log(b.sort((a,b)=>b-a)[0]);

//& reverse a string.
let c = "pavithra"
let cc = c.split("").reverse().join("");
console.log(cc);

//& convert string into array.
let d = 'pavithra'
console.log(d.split(""));

//& convert array into string.
let e = ['pavithra']
let ee = e.join("")
console.log(ee);


//~ filter and map - 

//get even numbers and sqaure of it in an array.
let arr = [1,2,3,4,5,6]
let result = arr.filter(num => num%2==0).map(num => num * num)
console.log(result);


let arr1 = [1,2,3,4,5]
let res =[]
for (let i=0; i<arr1.length;i++){
    if (arr1[i] %2 ==0 ){
        res.push(arr1[i]*arr1[i])
    }
}
console.log(res);

//& Square even numbers.
let arr2 = [1,2,3,4,5]
let ress = arr2.filter((items)=>items % 2==0).map((items)=>items * items)
console.log(ress);

let sum = 0
arr2.map((value)=>sum = sum +value)
console.log(sum);







