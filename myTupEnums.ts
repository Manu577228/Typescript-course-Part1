// Tuples

const user: (string | number)[] = [1, "mb"]

//
let tUser: [string, number, boolean]
tUser = ["mb", 131, true]

//
let rgb: [number, number, number] = [255, 255, 255]

//
type User = [number, string]
const newUser: User = [112, "manu@gmail.com"]
newUser[1] = "mb@gmail.com"
// newUser.push(true); => gives error

export {}