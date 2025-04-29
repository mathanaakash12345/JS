promisefunction = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Conformation from promise funtion block")
        },2000)
    })
}

const fetchdata = async ()=>{
    const data = await promisefunction()
    console.log(data)
}

fetchdata()


