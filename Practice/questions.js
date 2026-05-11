// 1- Variables and DataTypes

//ques-1:

// let a= 10;
// let b =20;

// console.log(a , b);
// [a,b] = [b, a];
// console.log(a,b)



//ques-2:


// let val = "hello";

// if(typeof val === "Number")
//     console.log("Number");
// else if(typeof val === "string")
// console.log("String");


//ques-3:

// let temp = 76; //in c

// let calc = (temp *1.8) +32;

// console.log(calc)




//ques.5

// const prompt = require("prompt-sync")()
// let birthYear = Number(prompt("Enter your birth year: "));

// let currentYear = new Date().getFullYear();

// let age = currentYear - birthYear;
// console.log(age)





//<-------------------------------------->


//2- Strings


//ques-1

// let str = "Javascript";

// let rev="";

// for(let i =str.length-1;i>=0;i--){
//     rev +=str[i];

// }
// console.log(rev)



//ques-2


// let count=0;
// for(let i =0;i<str.length;i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str == 'o' || str == 'u'){
//         count++;
//     }
// }
// console.log(count);




//ques-3


// let str = "manam";
// let rev="";

// for(let i =str.length-1;i>=0;i--){
//     rev +=str[i];

// }
// console.log(rev);

// if(str === rev){
//     console.log("yes")
// }else{
//     console.log("No")
// }


//ques-4


// let sentence = "My name is Pratiksha";
// let arr = sentence.split(" ");

// arr = arr.map((data)=> data[0].toUpperCase() + data.slice(1));
// arr = arr.join(" ")

// console.log(arr)



//ques-5


// let sentence = "My name is Pratiksha";
// let arr = sentence.split(" ");

// let longest =  arr[0];

// for(let i of arr){
//     if(i.length > longest.length){
//         longest = i;
//     }
// }
// console.log(longest)






//<-------------------------------------->


//3- Number & Math



//ques-1

// let data = Math.random()*100
// console.log(data);



//ques-2

// const prompt = require("prompt-sync")()
// let num = Number(prompt("Enter the num: "));
// let isPrime = true;


// if(num <= 1){
//     isPrime = false;
// }else{
//     for(let i =2;i<=Math.sqrt(num);i++){
//         if(num % i === 0){
//         isPrime = false;
//         break;
//     }
//  }
// }


// if(isPrime){
//     console.log("Prime")
// }else{
//     console.log("Not Prime")
// }




//ques-3



// const prompt = require("prompt-sync")()
// let num = Number(prompt("Enter the num: "));
// let fact =1;
// if(num === 0 || num === 1){
//     console.log(1)
// }else{
//     for(let i =1;i<= num;i++){
//         fact *= i;
//     }
//     console.log(fact);
// }




//ques-4


// const prompt = require("prompt-sync")()
// let num = Number(prompt("Enter the num: "));
// let a= 0;
// let b =1;
// let c;
// console.log(a);
// console.log(b);

// for(let i =1;i<= (num -2);i++){
//     c=a+b;
//     console.log(c);
    
//     a=b;
//     b=c;
    
// }






//ques-5


















//<-------------------------------------->




// 4-Arrays


//ques-1



// const arr = [1,2,3,4,5]
// let smallest = arr[0];
// let largest = arr[0];

// for(let i =0;i<arr.length;i++){
//     if(arr[i] <= smallest){
//         smallest= arr[i];
//     }else if(arr[i] >= largest){
//         largest = arr[i]
//     }
// }
// console.log(smallest);
// console.log(largest);





//ques-2

// let arr = [1,2,2,3,5,5,5];

// let new_arr =[];

// for(let i=0;i< arr.length;i++){
//     if(new_arr.includes(arr[i])){
//         continue;
//     }
//     else{
//         new_arr.push(arr[i])
//     }
// }
// console.log(new_arr)





//ques-3


// let arr = [5,2,8,3,89];


// for(let i=0;i<arr.length;i++){
//     for(let j =0; j<arr.length-i-1; j++){
//         if(arr[j] > arr[j+1]){
//             //swap
//             let temp = arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]= temp;
//         }

//     }
// }
// console.log(arr);




//ques-4



const arr = [1,7,4,8,5]

let largest = arr[0];
let sec_largest = arr[0];














//ques-5





















//<-------------------------------------->


//5- Objects


//ques-1


// const student ={
//     name: "John",
//     age: 26,
//     place(){
//         console.log("Britain")
//     }
// }

// for(let key in student){

//     if(typeof student[key] === "function"){
//       student[key]();

//     }else{
//          console.log(key, student[key]);

//     }
   
// }





//ques-2


// const student ={
//     name: "John",
//     age: 26,
//     place(){
//         console.log("Britain")
//     },
//     role: "Engineer"
// }


// let count =0;

// for(let i in student){
//     count++;
// }
// console.log(count)




//ques-3

// const student ={
//     s_name: "John",
//     s_age: 26,
//     s_place(){
//         console.log("Britain")
//     }
// };
// const teacher ={
//     t_name: "Williams",
//     t_age: 49,
   
// };

// const obj = {...student, ...teacher};

// console.log(obj)




//ques-4


// const obj = {
//     name: "John",
//     age: 30,
//     place: "New York"
// };

// const keys = Object.keys(obj)
// console.log(keys)

// const values = Object.values(obj)
// console.log(values)




//ques-5


// const shopping_cart= {
//     "Milk" : 80,
//     "Bread" : 50,
//     "Sugar" : 40,

// }
// let bill =0;

// for(let i of Object.values(shopping_cart)){

//     bill += i;
// }

// console.log(bill)





//<-------------------------------------->


// 6-Loops

//ques-1














//ques-2

// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter the num: "));

// for(let i =1;i<=10;i++){
//     console.log(num * i)
// }



// ques-3

// let sum =0;

// for(let i =1;i<=100;i++){
//     if(i % 2 == 0){
//         sum += i;
//     }
// }
// console.log(sum);



//ques -4






















//<-------------------------------------->



// 7- Functions


//ques-1


// function greatest(a,b,c){
//     return Math.max(a,b,c);
// }

// console.log(greatest(2,7,1));




//ques-2


// const palindrome = function(data){
// let temp = data;
//     let rev =0;
//     while(data > 0){ 
        
// let num = data % 10;
// rev = rev*10 + num ;
// data = Math.floor(data/10);
// }

// if(temp === rev){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// }

// palindrome(121)





//ques-3


// function curr_Conversion(dollar){
//     let rs =1;
//     rs= dollar * 90;
//     return rs;

// }

// console.log(curr_Conversion(2))

// console.log(curr_Conversion(5))




//ques-4

// function even(arr){
//     let new_arr= arr.filter((x)=> x%2 == 0)
//     return new_arr;
// }

// let numbers = [2,8,3,5,1,9,4];
// console.log(even(numbers))




//ques-5


// function calculator(a, b , operator){
//     switch(operator){
//     case "+":
//         console.log(a+b); 
//         break;
//     case "-":
//         console.log(a-b);
//         break;
//     case "*":
//         console.log(a*b);
//         break;
//     case "/":
//         console.log(a/b);
//         break;
//     }
// }

// calculator(10,8,"-");


//

// const calc = {
//     sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
//     sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
//     mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
//     div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
// };
 
// console.log(calc.sum(5, 5, 10, 20));
 



//<-------------------------------------->


// 8- Scope and Hoisting


// ques-1












// ques -3

let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);




// calculator using callback
 const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))


















