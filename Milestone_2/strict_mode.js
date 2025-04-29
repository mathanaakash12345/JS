function account(name, balance) {
    "use strict";

    let Name = name;
    let Balance = balance;
    console.log( name);
    console.log(balance);
}
account("John Doe", 1000);

console.log(Name);  
console.log(Balance); 
    // // It throws an ReferenceError
    // wth using strict mode it catches the minor errors also, without using the let,const,var in the 
    //     code leads to the great confusing in the real worls implementation