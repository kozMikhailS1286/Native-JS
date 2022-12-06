const todoListId_1 = "gf76-43mc"
const todoListId_2 = "2"

const todoList = [
    {
        id: todoListId_1, // "gf76-43mc"
        title: "What to learn",
    },
    {
        id: todoListId_2,
        title: "What to by",
    },
]

const getPropsName = (param) => `${param} name`

const tasks = {
    [todoList[0].id]: [ // "gf76-43mc"
        {id: "11", title: "HTML"},
        {id: "12", title: "CSS"},
        {id: "13", title: "JS & TS"},
    ],
    [todoListId_2]: [ // 2
        {id: "21", title: "Milk"},
        {id: "22", title: "Beer"},
        {id: "23", title: "Water"},
    ],
    "user name": "Bob",
    [getPropsName("student")]: "Alex",
    [10+30]: "hey!!!" // "40"
}


const yo = {
    "1": "Bob",
    "2": "Nick",
    "3": "Donald"
}

console.log(JSON.stringify(yo))
console.log(JSON.parse(JSON.stringify(yo)))
console.log(yo["2"])
console.log(Object.keys(tasks));


// CRUD

const newTask =  {id: "14", title: "React"}
const copyTasks = {...tasks, [todoListId_1]: tasks[todoListId_1], newTask}

console.log(copyTasks)

// delate id="23"

console.log({...tasks, [todoListId_2]: tasks[todoListId_2].filter(t => t.id !== "23")});


// reduse

const nums = [1,2,3,4,5]

console.log(nums.reduce((acc, el)=> acc + el, 0));

console.log(nums.reduce((acc, el)=> acc > el ? acc : el));
console.log(Math.max(...nums));

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

console.log(students.filter(s => s.name !== "Nick"));
console.log(students.reduce((acc, st) => {
    if(st.name !== "Nick") {
        acc.push(st)
    }
    return acc
}, []));

console.log(students.map(st => ({...st, scores: st.scores + 10})))

console.log(students.reduce((acc, st) => {
    const copySt = {...st, scores: st.scores + 10}
    acc.push(copySt)
    return acc
}, []));

const sts = {
    "Bob": {
        name: "Bob",
        age: 22,
        isMarred: true,
        scores: 85
    },
    "Alex": {
        name: "Alex",
        age: 21,
        isMarred: true,
        scores: 89
    },
}

console.log(students.reduce((acc, st)=> {
    acc[st.name] = {...st}
    delete acc[st.name].name
    return acc
}, {}) )