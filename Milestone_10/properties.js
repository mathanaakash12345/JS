let details = {};

Object.defineProperties(details, {
    fName: {
        value: "Mathana Akash",
        writable: true,
        enumerable: true,
        configurable: true
    },
    company: {
        value: "Calibraint",
        writable: true,
        enumerable: true,
        configurable: true
    },
    exp:{
        value: 3,
        writable: false,
        enumerable: true,
        configurable: true
    }
});

console.log(details.fName); 

details.company = "UST global"
details.exp = 4 //can't rewrite
console.log(details) //writable


//Reading Property Attributes
let demo = Object.getOwnPropertyDescriptors(details)
let demo2  = Object.getOwnPropertyNames(details)
console.log(demo)
console.log(demo2)