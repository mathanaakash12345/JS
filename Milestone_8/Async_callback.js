// for async only example

console.log("Order pizza");

setTimeout(() => {
    console.log("Pizza delivered after 3 seconds");
}, 3000);

console.log("Do homework while waiting...");


// for async and callback example

weatherdisplay = (t,func) => {
    setTimeout(()=>{
        console.log("it runs after this",t,"ms")
        func()
    },t)
}

temp = () =>{
    console.log("city:",UK)
    console.log("temperature:",22)
}
const time = 3000
weatherdisplay(time,temp)