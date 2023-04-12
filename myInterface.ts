// interface = similar to class

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string): number
}

const manu: User = {dbId: 44, email: "manu@gmail.com", userId: 2211, 
startTrail: () => {
    return "trial started"
},
getCoupon: (name: "manu10") => {
    return 10
}
}
manu.email = "m@gmail.com"
// manu.dbId = 33 // gives error

export {}