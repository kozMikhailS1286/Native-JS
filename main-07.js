// 19.01.23

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"

// My:
let repeatString = (str, number, a) => {
    let string = str + a
    return string.repeat(number)
}

console.log(repeatString("yo", 3, " "));
console.log(repeatString("yo", 3, ", "))

// Students:

let repeatStringgg = (string, number, separator) => {
    return (string + separator).repeat(number--) + string
}

console.log(repeatStringgg("yo", 5, " "));
console.log(repeatStringgg("yo", 5, ", "));



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false

let checkStart = (str, smStr) => {
    let string = str.toLowerCase();
    let smallString = smStr.toLowerCase()
    for (let i = 0; i < smallString.length; i++) {
        if (string[i] === smStr[i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(checkStart("Incubator", "inc"));


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

let truncateString = (str, number) => {
    let string = str.slice(0, number)
    return string + "..."
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null

let getMinLengthWord = (str) => {
    if (str === " " || typeof(str) !== 'string') {
        return null
    }
    let arr = str.split(" ")
    return arr.reduce((a, b) => b.length < a.length ? b : a, arr[0])
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи"));


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

let setUpperCase = (str) => {
    let newStr = str.toLowerCase().split(" ");
    let res = []
   newStr.forEach((e, i) => {
       // e  ===Всем    e[0] === в e[0].toUpperCase() ==> В + e.slice(1) === сем
       // e  ===Студентам
       // e  ===Инкубатора
       // e  ===Желаю
       // e  ===Удачи
      res.push(e[0].toUpperCase() + e.slice(1))
   })
    return res.join(" ");
}

let setUpperCasee = (str) => str.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ") + "!"

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ"));
console.log(setUpperCasee("всем стУдентам инкуБатора Желаю удачИ"));


// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

// 6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false

function isIncludes(str, podStr) {
    const strLower = str.toLowerCase().split('')
    const podStrLower = podStr.toLowerCase().split('')
    let result = true
    podStrLower.forEach(letter=>{
        if(!strLower.includes(letter)){
         result=false
        }else{
            const letterIndex = strLower.indexOf(letter)
            if (letterIndex > -1) {
                strLower.splice(letterIndex, 1);
            }
        }
    })
     return result
}


console.log( isIncludes("Incubator", "Cut") );