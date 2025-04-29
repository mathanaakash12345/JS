class createuser {
  constructor(name, age) {
    this.Name = name;
    this.Age = age;
    this.vanakam = () => {
      console.log("Helo, My name is", this.Name, "--", this.Age);
    };
  }
}
let user1 = new createuser("BEN", 10);
let user2 = new createuser("Gwen", 11);

user1.vanakam();
user2.vanakam();
