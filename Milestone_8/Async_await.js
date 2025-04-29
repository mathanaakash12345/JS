const condition = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("ALL GOOD")
        },2000)
    })
}

const  statuscheck = async() =>{
    const status = await condition()
    console.log(status)
}

statuscheck()