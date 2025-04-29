// Statements
// Keywords and reserved words
// Variable


const Lights = (l) =>{
    if (l=="green"){
        console.log("Go");
        return "Clear"
    }
    else if(l=="yellow"){
        console.log("Listen");
        return "Slowdown"
    }
    else if(l=="red"){
        console.log("stop");
        return "wait"
    }
    else{
        console.log("Invalid signal")
        return "enter valid signal"
    }
}


console.log(Lights("red"))
console.log("-----------")
console.log(Lights("green"))
console.log("-----------")
console.log(Lights("yellow"))
console.log("-----------")
console.log(Lights("blue"))