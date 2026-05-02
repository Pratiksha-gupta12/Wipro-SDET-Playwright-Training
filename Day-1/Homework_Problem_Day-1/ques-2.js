

function checkType(input) {
    if (typeof input === "number") {
        console.log("This is a number");
    } else if (typeof input === "string") {
        console.log("This is a string");
    } else if(typeof input === "obj"){
        console.log("This is a object");
    } else if (typeof input === "boolean"){
        console.log("This is a boolean")

    }else {
        console.log("Unknown type")
    }
}

const obj ={
    name:"James",
    age: 5
}
checkType(true)
checkType("Hello")
checkType(5)
checkType("12")
checkType(obj)