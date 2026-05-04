const obj = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];


let filtered = obj.filter((x)=>{
   return x.age >=18;
})
console.log(filtered);