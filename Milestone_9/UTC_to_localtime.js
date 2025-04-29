let utc = new Date('2025-04-28T12:00:00Z'); 

console.log(utc.toString()); //  convert to local time


//to get method for UTC formats
console.log(utc.getUTCHours()); 
console.log(utc.getUTCDate());
console.log(utc.getUTCMonth());


//for get method for local time
console.log(utc.getHours());
console.log(utc.getDate());
console.log(utc.getMonth());
