let date1 = new Date("2025-04-12")

let date2 = new Date("1987-09-04")

console.log(date1>date2)
console.log(date1<date2)

if (date1.getDay() === date2.getDay()){
    console.log("Days are same")
}
else{
    console.log("Days are not same")
}