function createuser(name, age) {
    let o = {};

    o.vanakam = function() {
        console.log("Hello, my name is",name);
    };

    return o;
}

let user1 = createuser("AK",22);
user1.vanakam(); 
let user2 = createuser("thala",25);
user2.vanakam()
