// изменения состояния => проверяет наличие обработчика (func) =>
// subscriber, listener, handler (подписчик, слушатель) =>
// формирует специальный объект (info about event) => event, ev, e
// func(e)

const sm = document.getElementById("small");
const md = document.getElementById("medium");
const bg = document.getElementById("big");

const handler1 = (e) => {
    e.stopPropagation()
    alert("yo!!!")
}
const handler2 = (e) => {
    e.stopPropagation()
    alert("hey!!!")
}
const handler3 = (e) => alert("wow!!!");

const handler4 = (e) => {
    if (e.currentTarget.id === "small") {
        alert(e.currentTarget.id)
    }
}
const handler5 = (e) => {
    if (e.target.tagName === "BUTTON") {
        alert(e.target.id)
    }
}

// sm.onclick = handler1
// sm.onclick = handler2
// sm.onclick = () => {alert("yo!!!"), alert("hey!!!")}
// sm.onclick = handler1

// sm.addEventListener("click", handler1)
// sm.addEventListener("click", handler2)
// sm.removeEventListener("click", handler1)
sm.addEventListener("click", handler1)
md.addEventListener("click", handler2)
bg.addEventListener("click", handler3)

const a = document.getElementById("a")

a.addEventListener("click", (e) => {
    e.preventDefault()
    alert("preventDefault")
})