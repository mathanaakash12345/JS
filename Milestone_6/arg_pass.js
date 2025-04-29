
const account = (x, exp) => {
  let total_exp = 0;
  for (key in exp) {
    total_exp += exp[key];
  }
  console.log("User total expenses:", total_exp);
  exp["tot_exp"] = total_exp;
  exp["savings"] = x - total_exp;
  return x - total_exp;
};

let salary = 20000;
console.log("User salary:",salary)
let expenses = {
  medical: 2500,
  food: 5000,
  travel: 2000,
  loan: 3500,
};
console.log("User savings amount is:", account(salary, expenses));

console.log("User Expenses are:",expenses);
