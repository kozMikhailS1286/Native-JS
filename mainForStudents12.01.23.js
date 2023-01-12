// 12.01.23

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}



//1. Создайте поверхностную копию объекта user
let copyUser = {...user}
console.log("1:");
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
const deepCopyUser = {...user, friends: [...user.friends]};
console.log("2:");
console.log(user===deepCopyUser)
console.log(user.friends===deepCopyUser.friends)

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];
console.log("3:");
console.log(students === copyStudents)
console.log(students[1] === copyStudents[1])
console.log(students[0] === copyStudents[1])
console.log(students[0].name === copyStudents[0].name)

//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)

let deepCopyStudents = students.map(s => {
    return {...s}
})

console.log("4*:");
console.log(deepCopyStudents === students)
console.log(students[1] === copyStudents[1])
console.log(students[0] === copyStudents[1])
console.log(students[0].name === copyStudents[0].name)

//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) => {
    if(a.name > b.name) {
        return 1 
    } else {
        return -1
    }
});

console.log("5:");
console.log(sortedByName);


//5a. Отсортируйте deepCopyStudents по успеваемости (лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log("5a:");
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(t => {
    return t.scores >= 100;
});

console.log("6:");
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents;

console.log("6a:");
console.log(topStudents.splice(topStudents.length - 3))


//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...deepCopyStudents, ...topStudents];

console.log("6b:")
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(s => {
    return s.isMarried == false;
});

console.log("7:")
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => {
    return s.name
});

console.log("8:")
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(" ");

console.log("8a:")
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(", ");;
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => {
    return {...s, isStudent: true}
});

console.log("9:")
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(st => {
    return st.name === "Nick" ? {...st, isMarried: true} : st
});

console.log("10:")
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(s => {
    return s.name === "Ann"
});

console.log("11:")
console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((a, b) => {
    return a.scores > b.scores ? a : b
});

console.log("12:")
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((a, b) => a + b.scores, 0)

console.log("13:")
console.log(scoresSum)



// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
   //..............................
}

console.log(addFriends(students));

// 15. Д.З.: Напишите функцию getBestStudents, которая принимает параметром
// массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10) => [{}, {}, ...., {}, null, null, null, null ]








