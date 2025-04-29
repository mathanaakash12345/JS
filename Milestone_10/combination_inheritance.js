//combine both prototype chaining and constructor stealing

function vehicle(name){
    this.name = name
}

vehicle.prototype.display = function(){
    console.log("this is",this.name,"vehicle")
}

function model(name,mod){
    vehicle.call(this,name)
    this.model = mod
}

model.prototype = Object.create(vehicle.prototype)
model.prototype.constructor = model

model.prototype.calll = function(){
    console.log("model is",this.model)
}

const m1 = new model("yamaha","r15")

m1.display()
m1.calll()