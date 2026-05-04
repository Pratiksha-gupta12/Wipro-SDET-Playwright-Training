const temp = [0, 10, 20, 30];

let new_temp = temp.map((x)=>{
    to_Fahrenheit = (x/1.8) + 32;
    return to_Fahrenheit
});

console.log(new_temp);