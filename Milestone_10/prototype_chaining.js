function animal(name){
    this.name = name
}

animal.prototype.food = function(){
    console.log("Its true the animal eats")
}

function cow(name,sound){
    animal.call(this,name)
    this.sound =sound
}

cow.prototype = Object.create(animal.prototype)
cow.prototype.constructor = cow

cow.prototype.ms = function(){
    console.log("this makes",this.sound)
}

const an1 = new cow("bull", "booo")

an1.food()
an1.ms()