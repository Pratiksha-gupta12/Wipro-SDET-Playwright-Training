const prices = [19.99, 5.50, 3.99, 25.00];


let total = prices.reduce((acc, price)=>{
    acc += price;
    return acc;
},0);

console.log(total);

