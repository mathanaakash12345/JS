const newuser = (name,age) =>{
    let obj = {
        name : name,
        age : age,
        vanakam : ()=>{
            console.log("Hello,My name is",name)
        }
    }
    return obj
}

let user1  = new newuser("riyaz",21)
let user2  = new newuser("praveen",20)

user1.vanakam()