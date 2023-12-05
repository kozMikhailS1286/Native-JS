// js16:

// published, subscriber, observer


// store.subscribe(function subscriber () {}) // вызовится как только стор изменился, будет вызов
// button.addEventListener('click', function subscriber() {}) // вызовится как произошйдет клик
// setTimeout(function subscriber() {}, 1000) // вызовится как пройдет секунда
// promise.then(function subscriber() {}) // вызовится как зарезолвится промис.
//
// useEffect(function subscriber() {}, []) // вызоывется при первой отрисовке а далее с учетом массива.


// const button = {
//     _subscribers: {
//         'click': [],
//         'doubleClick': []
//     },
//     click() {
//         this._subscribers['click'].forEach((subs) => subs())
//     },
//     doubleClick() {
//         this._subscribers['doubleClick'].forEach((subs) => subs())
//     },
//     addEventListener(eventName, subscriber) {
//         this._subscribers[eventName].push(subscriber)
//     },
//     removeElementListener(eventName, subscriber) {
//         this._subscribers[eventName] = this._subscribers[eventName].filter((subs) => subs != subscriber)
//     }
// }
//
// const subscriber = () => {
//     console.log('something after click')
// }
//
// button.addEventListener('click', subscriber)
//
// console.log(button)
//
//
// button.removeElementListener('click', subscriber)
//
// console.log(button)


// След:

function foo () {}

const bar = () => {}

console.dir(foo)

foo.apply()
bar.apply()