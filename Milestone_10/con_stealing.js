function animal(name){
    this.name = name
}

function dog(breed,name){
    animal.call(this,name)
    this.breed = breed

}

let d1 = new dog("buddy","lab")
console.log(d1.name)
console.log(d1.breed)