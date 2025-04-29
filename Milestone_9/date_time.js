let data = new Date();
console.log(data.toLocaleString()); 

console.log(data.toLocaleDateString())

console.log(data.toLocaleTimeString())


//Time zone offset
console.log(data.getTimezoneOffset())

//Epoch Time
console.log(data.getTime()) // it is always in the millisec 