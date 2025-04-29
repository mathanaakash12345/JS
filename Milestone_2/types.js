function check(user) {
    if (typeof user.name === "undefined") {
        console.log("Name is missing."); 
    } else {
        console.log("Name:", user.name); 
    }

    if (typeof user.age === "number") {
        console.log("Age:", user.age); 
    } else {
        console.log("Invalid age.");
    }

    if (typeof user.companyName === "string") {
        console.log("Company Name:", user.companyName); 
    } else {
        console.log("Company name is unknown.");
    }

    if (typeof user.experience === "number") {
        console.log("Experience:", user.experience, "years"); 
    } else {
        console.log("Experience not provided.");
    }
}

let user1 = {
    name: "Akash",
    age: 22,
    company: "TCS",
    exp: 1
};

let user2 = {
    age: 25,
    company: "Infosys",
    exp: 3
};

check(user1);
check(user2);
