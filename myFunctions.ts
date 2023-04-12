//number

function addTwo(num: number): number{
    return num + 2
    // return "hello"    // gives error
}

// string

function getUpper(val: string){
    return val.toUpperCase
}

// combination of string & boolean

function signUpUser(name: string, email: string, isPaid: boolean){
       
}

// is you have to assign isPaid to nothing 

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}


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
const getHello = (s: string):string => {
      return ""  // empty string so it works
}


//

const heros = ["thor", "spiderman", "ironman"]

heros.map ((hero): string => {
return `hero is ${hero}`
})

//

function consoleError(errmsg: string): void{
    console.log(errmsg)
}




export {}