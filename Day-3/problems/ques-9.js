const test_result = [80, 90, 70, 100];

let avg = test_result.reduce((acc, calc)=>{
    
   
    return acc+ calc;
},0);

let final = avg/test_result.length;

console.log(final);