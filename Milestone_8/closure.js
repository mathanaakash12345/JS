const counter = () =>{
    let count = 0

    return  () => {
        count++
        return count
    }
}

const value = counter();
value()
value()
value()
console.log(value())
