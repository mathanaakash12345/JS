let animal = {
    eats: true
};

let rabbit = Object.create(animal);
rabbit.hops = true;

console.log(rabbit.eats); 
console.log(rabbit.hops); 
