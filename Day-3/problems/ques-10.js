const nested = [[1, 2], [3, 4], [5, 6]];

let flat_arr = nested.reduce((acc,curr)=>{
    return acc.concat(curr);
},[]);

console.log(flat_arr);