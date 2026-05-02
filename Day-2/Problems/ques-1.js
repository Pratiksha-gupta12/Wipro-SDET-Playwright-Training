function formatGuests(names){
    names.shift();
    
    let new_name = names.map(name => `Guest: ${name}`);

    return new_name.join("\n")

}


let guests = ["Alice", "Kaushik" ,"Bob"];
console.log(formatGuests(guests))