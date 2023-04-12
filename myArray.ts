// defining arrays using typescript types

const superHeros: string[] = []
const heroPower: number[] = []
const heroAge: Array<number> = []

type User = {
    name: string;
    isActive: boolean;
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman");
heroPower.push(2);

allUsers.push({name:"", isActive: true})


