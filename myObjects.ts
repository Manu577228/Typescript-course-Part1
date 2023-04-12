const User = {
    name: "Manu",
    email: "manu@gmail.com",
    isActive: true
}

// object

function createUserOne({name: string, isPaid: boolean}) {

}

createUserOne({name: "Manu", isPaid: false})

// object returning object 

function createCourse(): {name: string, price: number} {
    return {name: "react.js", price: 399}
}

// object

let newUser = {name: "manu", isPaid: 399, isActive: true}

// object

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return {name: "", email:"", isActive: true}
}

// object

type Users = {
    readonly _id: string,
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number
}

let myUser: Users = {
    _id: "12345",
    name: "Manu",
    email: "manu@gmail.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "manu@gmail.com"
// myUser._id = "asa"  // gives error as it is read only property


export {}