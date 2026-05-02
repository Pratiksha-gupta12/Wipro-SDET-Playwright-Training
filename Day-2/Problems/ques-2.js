const getHighNumbers = (arr) => {

    let num = arr.filter(item =>  typeof item === "number");
    const threshold = Math.floor(Math.random()* 50)+1;

    const resultArr = num.filter(val => val> threshold);
    return resultArr;


};

mixedArr = ["Henry", 90,50, "Sam", 7];
console.log(getHighNumbers(mixedArr))