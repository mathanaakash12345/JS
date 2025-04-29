let data = new Date()
console.log(data)

//extract days, month, year from date
let day = data.getDate()
let year = data.getFullYear()
let month = data.getMonth()
let dayy = data.getDay()
let hour = data.getHours()
let min = data.getMinutes()
let sec = data.getSeconds()
console.log(day,"/",year,"/", month)
console.log(dayy)
console.log(hour)
console.log(min)
console.log(sec)


let mil = Date.parse(data)
console.log(mil) //to get millisecond


//formating dates
let f1 = new Date('2025/03/02')
let f2 = new Date('2025-03-02')
let f3 = new Date('Mar 25 2015')

console.log(f1)
console.log(f2)
console.log(f3)