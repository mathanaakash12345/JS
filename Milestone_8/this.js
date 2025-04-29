 outer = () => {
    this.name = "Closure eg with 'this' keyword";
    return  inner = () => {
        console.log(this.name);
    };
}

const myClosure = outer();
myClosure();