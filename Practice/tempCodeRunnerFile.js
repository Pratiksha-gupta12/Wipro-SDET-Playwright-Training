const student ={
    name: "John",
    age: 26,
    place(){
        console.log("Britain")
    }
};
const teacher ={
    name: "Williams",
    age: 49,
   
};

const obj = {...student, ...teacher};



console.log(obj)

