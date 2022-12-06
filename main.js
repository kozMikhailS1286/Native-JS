const users = [
    {
        id: 1,
        name:"Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name:"Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]

const newUser = {
    id: 4,
    name:"Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}

const user2 = [newUser, ...users];
const user3 = user2.map(u => u.id === 5 ? {...u, name: "Joe", address: {...u.address, city: "Minsk"}} :  u);

console.log(user3);

