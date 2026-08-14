//! strings

//~ 1. By using single quotes

let name='Pavithra V'
console.log(name);
console.log(typeof(name));

//? 2. By using double quotes
let name1="Pavithra"
console.log(name1);
console.log(typeof(name1));

//?3. By using back-tick (we can write multiple codes using backtick)
let name2=`Pavi`
console.log(name2);
console.log(typeof(name2));

//?I. string literals
let namee='pavithra'
age=21
console.log("Hi This is " +namee+ "and my age is" +age);

//?string interpolation/template(use--${} instead of +) ---> creating string with the help of backtick 
let Name='pavithra'
age=21
console.log(`Hi! This is ${Name} and my age is ${age}`);

//?II. string constructor --> strings can be created as an object by using string() constructor (need to use 'new' keyword)
//auto-boxing --> process of converting normal string into string Object
let data=new String("pavithra")
console.log(data)
console.log(typeof data);

//!  property of string-------
//~ length - used to find the length of string
//~ syntax - string_reference.length
let data1=new String("pavithra")
console.log(data1)
console.log(typeof data1);
console.log(data1.length);

//~ to access particular character in string using index
let data2='java_script'
console.log(data2[0]); //o/p:j

let data3='java_script'
console.log(data3[data3.length-1]); //o/p:t


//!-----string methods------(3 types)

//~ 1. static methods 
let demo=String.fromCharCode(74,65,86,65,95,83,67,82,73,80,84);
console.log(demo); // output: JAVA_SCRIPT

let demo1=String.fromCodePoint(128564);
console.log(demo1); // output: 😴

//& 3. string raw (gives as it is even though we mention \n, works only with backticks)
let a=String.raw`hello!\nHiiii ${2+2}`
console.log(a);

//~ instance methods
//& 1. at() -works with negative index also.
let str = 'java_script'
console.log(str.at(5)); //output:s
console.log(str.at(-2)); //output:p

//& 2. chatAt() - ony works with +ve index & doesn't work with -ve index.
let str1 = 'java_script'
console.log(str1.charAt(5)); //output:s
console.log(str1.charAt(-2)); //output: prints nothing.

//& 3. charCodeAt() - it returns unicode value of the characters
let str2 = 'java_script'
console.log(str2.charCodeAt(2)); //output:s

//& 4.concat()-
let merge = 'Alpha'
let merge2='Beta'
let merge3='gamma'
console.log(merge.concat("_",merge2,"_",merge3));

//& 5.includes() - always return boolean data.
//!syntax- includes('substring','startindex')
let char = "Hello! Good Morning"
console.log(char.includes("Good")); //output:true
console.log(char.includes("Good",11)); //output:flase

//& 6. indexof()- return index number ,if value doesn't present it return -1
//!syntax- indexof('substring','startindex')
let char1 = "Hello! Good Morning"
console.log(char1.indexOf("Good")); //output:7
console.log(char1.indexOf("GoodDsf")); //output:-1
console.log(char1.indexOf("Good",3)); 

//& 7. lastIndexOf()- returns last occurence index of a substring or -1 if not  found.
let Data='welcome to java_script to'
console.log(Data.lastIndexOf("to")); //output: 23

//& 8. split() - converts string into array with the help of seperators.
let Data1='Welcome to java_script'
console.log(Data1.split()); //~ complete string considered as one item.
console.log(Data1.split("")); //~ each letter seperated by commas.
console.log(Data1.split(" ")); //~ one space between words.
console.log(Data1.split("o")); //~ removes specified characters.

//& 9. toUpperCase()- 
let Data2='Welcome to java_script'
console.log(Data2.toUpperCase()); // output: WELCOME TO JAVA_SCRIPT

//& 10. toLowerCase()-
let Data3='Welcome to java_script'
console.log(Data3.toUpperCase()); // output: welcome to java_script

//& 11. trim() - removes white spaces from both the ends of string.
let Data4=' react  '
console.log(Data4.length); //output:8
let result = Data4.trim()
console.log(Data4.trim().length);

//& 12.trimStart() - removes whitespace at the start.
let Data5 =' react  '
console.log(Data5.trimStart());

//& 13.trimStart() - removes whitespace at the end.
let Data6 =' react  '
console.log(Data6.trimStart());

//& 14. startsWith() - checks if a string starts with specified substring, returns boolean value as o/p.
let Data7 ='Good Afternoon'
console.log(Data7.startsWith("Good")); //output: true
console.log(Data7.startsWith("Afternoon",2)); //false

//& 15. endsWith() - checks if a string ends with specified substring, returns boolean value as o/p.
let Data8 ='Good Afternoon'
console.log(Data8.endsWith("Afternoon")); //output: true
console.log(Data8.startsWith("Afternoon",2)); //false

//& 16. repeat() - repeats a string with a specified number of times , can't accept negative numbers.
let Data9 ='Helloooo!!!!!!!'
console.log(Data9.repeat(4));

//& 17. padStart()-
let dataa = 'React'
console.log(dataa.padStart(8,"r")); //output: rrrReact

//& 18. padEnd()-
let daata = 'React'
console.log(daata.padEnd(8,"r")); //output: Reactrrr

//& 19.replace() - used to replace 1st occuring substring
let info = 'Frontend Technology'
console.log(info.replace('Frontend','web'));

//& 20. replaceAll() - used to replace all the occurances.
let infor = 'Web Technology is a Technology'
console.log(infor.replaceAll('Technology','Tech'));

//& 21. toString() - converts string object to primitve string.
let info1 = new String("heyyy!!!!!")
console.log(typeof info1.toString());

//& slicing 
let iinfo = 'Welcome to javascript life'
console.log(iinfo.slice(8));
console.log(iinfo.slice(8,21));
console.log(iinfo.slice(-5));

//&  substring
let iinnfo = 'welcome to javascript life'
console.log(iinnfo.substring(8));
console.log(iinnfo.substring(8,21));
console.log(iinnfo.substring(-5));


