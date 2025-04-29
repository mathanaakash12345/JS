let age = 25;
let salary = 50000;
let bonus = 10000;
let isEmployed = true;
let isMarried = false;
let num1 = 8;
let num2 = 3;
let company = "Calibraint";

age++; 
salary += bonus; 
let LPA = salary * 12; 
let saving = LPA - 400000;

let E = age >= 18 && isEmployed === true;
let t = salary > 40000 ? "High" : "Low";

let company_name = company || "Unknown";
let r = num1 & num2;

console.log("Age:", age);
console.log("Salary:", salary);
console.log("Total Income:", LPA);
console.log("Remaining Income:", saving);
console.log("Can eligible for loan:", E);
console.log("Tax:", t);
console.log("Company Name:", company_name);
console.log("Bitwise Result:", r);
