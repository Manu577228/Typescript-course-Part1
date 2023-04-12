"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Manu",
    email: "manu@gmail.com",
    isActive: true
};
// object
function createUserOne(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUserOne({ name: "Manu", isPaid: false });
// object returning object 
function createCourse() {
    return { name: "react.js", price: 399 };
}
// object
var newUser = { name: "manu", isPaid: 399, isActive: true };
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
var myUser = {
    _id: "12345",
    name: "Manu",
    email: "manu@gmail.com",
    isActive: false
};
myUser.email = "manu@gmail.com";
