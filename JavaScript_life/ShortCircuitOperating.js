/*  logical and*/
let result= "haii" && "aruna" && "pink" && false;
console.log(result);

/* logical or*/
let result1= true || "aruna" || "pink" || true;
console.log(result1);

/* nullish coalescing*/
let res= undefined ?? "aruna";
console.log(res);


/*continue*/

for (let i=1; i<=5; i++ ){
    if (i==3) continue
    console.log("i= ",i);
}


/* break*/
for (let i=1; i<=5; i++ ){
    if (i==3) break
    console.log("i= ",i);
}