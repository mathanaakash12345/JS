function CreateUser(name, age) {
    this.name = name;
    this.age = age;
}

CreateUser.prototype.vanakam = function () {
    console.log(`Hello, my name is ${this.name} -- ${this.age}`);
};

let user1 = new CreateUser("BEN", 10);
let user2 = new CreateUser("Gwen", 11);

user1.vanakam();  
user2.vanakam();  
