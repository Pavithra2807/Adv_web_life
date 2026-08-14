//~ 1. remove wel from the string.
let aa='welcome to javascript life'
console.log(aa.replace("wel",""));

//~ 2. remove all spaces from the string.
let aaa='welcome to javascript life'
console.log(aaa.replaceAll(" ",""));

//~ 3. remove 1st & last char from the string.
let aaaa='welcome to javascript life'
console.log(aaaa.slice(1,-1));

//~ 4. check whether 1st & last characters are same.
let b = 'welcome to javascript life'
console.log(b[0]==b[-1]);
console.log(b[0]==b[b.length-1]);

//~ 5. count how many 'A's available in particular string.
let count = 'welcome to javascript life'
console.log(count.split("a").length-1);

//~ 6. replace space with backslash
let rep= 'welcome to javascript life'
console.log(rep.replaceAll(" ","\\"))

//~ 7. Find the middle character of the string.
let mid = 'welcome to javascript life'
console.log(mid.charAt(mid.length/2));

//~ 8. Change only first character to uppercase.
let char = 'welcome to javascript life'
console.log(char[0].toUpperCase()+char.slice(1));

//~ 9. swap the 1st & last character.
let swap = 'welcome to javascript life'
console.log(swap[swap.length-1]+swap.slice(1,-1)+swap[0])

let ara='welcome to javascript life'
console.log(ara.slice(3));