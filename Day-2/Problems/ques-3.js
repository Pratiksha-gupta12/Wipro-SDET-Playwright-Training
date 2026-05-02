arr = ["100", "40", "58", "76"];

let handlingFee = arr.pop();

new_arr = arr.map(price =>  Number(price));

const sum = (arr)=> arr.reduce((arr, curr) => arr +curr,0);

let total = sum(new_arr);


console.log(`Total Price: ${total}`)

