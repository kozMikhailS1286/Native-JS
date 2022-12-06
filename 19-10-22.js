let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
        // isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


const funcNames = (x) => x.name;
const funcScores = (x) => x.scores;
const funcStudent = (x) => ({...x, isStudent: true})

const globalM = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

// Работают одинаково:
console.log(globalM(students, funcNames))
console.log(students.map(funcNames))

// console.log(global(students, funcScores))
// console.log(global(students, funcStudent))

const globalF = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func (array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}

// Работают одинаково:
console.log(globalF(students, s => s.age > 20))
console.log(students.filter(s => s.age > 20))


const globalFd = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i];
        }
    }
}

console.log(globalFd(students,s => s.name === "Bob"))
console.log(students.find(s => s.name === "Bob"))


const globalPush = (array, el) => {
    return array[array.length] = el;
}

console.log(globalPush(students, {hey: "Yo!!!"}))


const numbers = [1, 2, 3, 4, 5]

const globalIo = (array, el) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }
    }
    return -1
}

console.log(globalIo(numbers, 3))