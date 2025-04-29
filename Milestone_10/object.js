const obj = {
    Name : "Akash",
    Education : "UG",
    Blood_Group : "A-ve",
    College : "ESEC",
    Skills : "Python,java,etc..",
    Display : ()=>{
        console.log(obj.Name,"Studied",obj.Education,"in",obj.College)  
        // Data property - it more like the key : value pair
    }
}

console.log(obj.Display())    // Asscessor property - it calls the function using the object

console.log(obj.Name)    // Data property - it more like the key : value pair

for (k in obj){
    console.log(obj[k]) 
}

