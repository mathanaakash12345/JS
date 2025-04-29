//S
class User {
    constructor(name,email){
        this.name = name
        this.email = email
    }

    getdet(){
        return this.name+" "+this.email
    }
}

//O
class paymentmeth{
    pay(amt){
        return "this method not applicable"
    }
}

class creditpay extends paymentmeth{
    pay(amt){
        console.log(amt,"paid using credit card")
    }
}

class upipay extends paymentmeth{
    pay(amt){
        console.log(amt,"paid using UPI pay")
    }
}

function makepay(paymeth,amt){
    paymeth.pay(amt)
}

class printable{
    print(){
        throw new Error("method not implement")
    }
}

class invoicprit extends printable{
    constructor(invoicedet){
        super()
        this.det=invoicedet
    }

    print(){
        console.log("Invoice details:",this.det)
    }
}

class orderprocess {
    constructor(paymeth,printer){
        this.paymeth = paymeth
        this.printer = printer
    }

    payprocess(amt){
        this.paymeth.pay(amt)
        this.printer.print()
    }


    
}


const user  = new User ("Akash", "ak@gmail.com")
const pay = new creditpay()
const invoice = new invoicprit(user.getdet())
const order = new orderprocess(pay,invoice)
order.payprocess(500)