//functions------------------------------
//storing function in a variable ---function expression
function MyFunc(){
    console.log("Hello! i'm Function🙌 ");
}
MyFunc();

//Parameters & Arguments--------------------
function MyFunc1(name){
    console.log("Hello! "+name+" Hiiii🙌 ");
}
MyFunc1("Pavithra");

//1. function with return value(name function)-----------------
function MyFuncc(a,b){
    return a+b;
    console.log("Heyy! i'm Function💖");
}
let result=MyFuncc(10,20)
console.log(result);


//2. Anonymous Function---------------------
let MyFunc2=function(){
    console.log("Hello! I'm Anonymous Function🫠");
}
MyFunc2();

//3). Arrow Function--(which makes shorter code for normal functions)
// 1. no need to write function keyword.
// 2. no need to write return keyword if only one statement. 
// 3. no need to write {} if only one statement.
//4. no need to write () if only one parameter.
let adding=(a)=>{
    return a+100;
}
console.log(adding(10));

//with above mentioned advantages
let adding1=_=>10+100
console.log(adding1());

//finding whether the given number is even or odd
let resulttt=(num)=>(num%2==0)?"Even":"Odd";
console.log(resulttt(3));

//find greatest of 3 numbers
let greatest=(a,b,c)=>{
    if (a>b && a>c){
        console.log(a+ " is the greatest" )
    } else if(b>a && b>c){
        console.log(b+ " is the greatest" )
    } else if(c>a && c>b){
        console.log(c+ " is the greatest" )
    }
}
console.log((greatest(10, 20, 30)));

//or
let res=(a,b,c)=>(a>b & a>c)?a:(b>c)?b:c;
console.log(res(10,20,30));

//factorial of a number
let f=5;
let ans=1;
let fact=(f)=>{
    for (let i=2; i<=f; i++){
        ans*=i;
    }
    return ans;
}
console.log(fact(f));

//square of a number
let square=(num)=>num*num
console.log(square(4));

//greatest among 6 numbers
let resultt=(a,b,c,d,e,f)=> (a>b & a>c & a>d & a>e & a>f)?a:(b>c & b>d & b>e & b>f)?b:(c>d & c>e & c>f)?c:(d>e & d>f)?d:(e>f)?e:f;
console.log(resultt(23,90,45,56,72,34));