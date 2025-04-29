// Simple way
let det1 = {
  Name: "Akash",
  Age: 25,
};
console.log(det1);


//using the new Object()
let det2 = new Object();
det2.Name = "Mat";
det2.Age = 21;
console.log(det2);


//using constructor method
class details {
    constructor(Name,Age) {
        this.Name = Name;
        this.Age = Age;
    }
}
let det3 = new details("Kalai", 23);
console.log(det3);


//using Object.create()
let deta = {
    greeting() {
        console.log("Hello!");
    }
};
let emp = Object.create(deta); //emp inhert the deta
emp.name = "Ak";
emp.greeting(); 
