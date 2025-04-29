function cloneAnimal(original) {
    let clone = Object.create(original);
    clone.run = function() {
        console.log(this.name,"is running");
    };
    return clone;
}

let animal = { eats: true };
let dog = cloneAnimal(animal);
dog.name = "Buddy";

dog.run();
