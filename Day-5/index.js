
const obj = {
    name: "Aaryan",
    age: 25,
    city: "New York"
}
 
console.log(JSON.stringify(obj)); // object -> string
console.log(JSON.parse('{"name":"Aaryan","age":25,"city":"New York"}')); // string -> object





const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i);




