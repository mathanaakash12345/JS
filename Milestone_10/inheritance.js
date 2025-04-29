class lap{
    constructor(name){
        this.name = name
    }

    display1 = ()=>{
        return "I have a "+this.name+" laptop"
    }
}

class model extends lap{
    constructor(brand,model){
        super(brand)
        this.model = model
    }

    display = () =>{
        console.log(this.display1(),"the model is",this.model)
    }
}

user1 = new model("msi","thin15")
user1.display()