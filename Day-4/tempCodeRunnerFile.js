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


getData().then((data)=>{
    console.log(data)
}).catch((err) => console.log(err))
