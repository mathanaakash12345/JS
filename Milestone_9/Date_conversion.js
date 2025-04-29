let data = new Date();


console.log(data.toLocaleString("en-US", { timeZone: "America/New_York" }));
console.log(data.toLocaleString("en-GB", { timeZone: "Europe/London" }));
console.log(data.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
