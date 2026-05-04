const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

let count = fruits.reduce((acc, fruit)=>{
    
    return fruit === 'apple'? acc+1 : acc;

},0);

console.log(count)

