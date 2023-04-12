"use strict";
//number
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"    // gives error
}
// string
function getUpper(val) {
    return val.toUpperCase;
}
// combination of string & boolean
function signUpUser(name, email, isPaid) {
}
// is you have to assign isPaid to nothing 
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("Manu Bharadwaj");
signUpUser("manu", "manu@gmail.com", true);
loginUser("gowri", "gowri@gmail.com");
// function getValue(myVal: number): boolean{
//  if(myVal > 5){
//     return true
//  }
// return "200 OK"
// }
//
var getHello = function (s) {
    return ""; // empty string so it works
};
//
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//
function consoleError(errmsg) {
    console.log(errmsg);
}
