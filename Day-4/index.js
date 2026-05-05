// function getData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("Data received");          
//         },2000);
//     });
// }

// getData().then((data) =>{
//     console.log(data);

// }).catch((error)=>{
//     console.log("Error: ", error);
// });



// function getData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             reject("Data received");          
//         },2000);
//     });
// }

// getData().then((data) =>{
//     console.log(data);

// }).catch((error)=>{
//     console.log("Error: ", error);
// });


// setTimeout(()=>{
//     console.log("Hello");
// },2000);


// setInterval(()=>{
//     console.log("Data checking again and again");
// },5000);




function getData(){
    return new Promise((resolve, reject)=>{
        if(2>3){
            setTimeout(()=>{
                resolve("Data received");
            },2000);
        }else{
            reject('not working')
        }
    });
}


fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=> res.json())
.then(data=> data.filter(d => d.id%2 == 0))
.then(data => data.map(d=>(d.title = "Hey "+d.title)))
.then(data =>
    console.log(data)
).catch(error => console.log("Error: ",error))