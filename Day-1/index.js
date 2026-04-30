let a=5;
let b= 4;

//Mathematical operations

console.log("Addition:", a+b);
console.log("Subtraction:", a-b);
console.log("Product:", a*b);
console.log("Division:", a/b);
console.log("Remainder:", a%b);

//String operations

let str = "Hey Buddy!";

console.log("Original String:", str);
console.log("Length of String:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("SubString:", str.substring(0,4));




//logical operations

console.log("a > b:", a > b); 
console.log("a < b:", a < b); 
console.log("a == b:", a == b); 
console.log("a != b:", a != b); 
console.log("a >= b:", a >= b); 
console.log("a <= b:", a <= b); 



let obj={
    name: "Alice",
    age : 30,
    Role: "Trainer"
}

console.log(obj.age);
console.log(obj.Role);


function product(a,b){
    return a*b;

}
console.log("Product:", product(3,5))