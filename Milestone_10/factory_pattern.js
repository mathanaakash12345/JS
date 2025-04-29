createuser = (name, age) => {
  return {
    name: name,
    age: age,
    vanakam: function () {
      console.log("Hello, my name is", name);
    },
  };
};

let user1 = createuser("kala", 25);
let user2 = createuser("Thiru", 30);

user1.vanakam();
console.log(user2.name, "---", user2.age);
