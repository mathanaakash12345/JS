function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multi2 = multiply(2);
console.log(multi2(5));  

const multi3 = multiply(3);
console.log(multi3(4));  
