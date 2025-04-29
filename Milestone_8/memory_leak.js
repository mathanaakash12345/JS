const comp = () =>{
    let data = new Array(1000).fill("Calibraint")

    return ()=>{
        console.log(data[0])
        console.log("__________")
        console.log(data)
    }
}

let test = comp()

test()