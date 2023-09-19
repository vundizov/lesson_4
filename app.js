// JSON

const object ={
    name:'name',
    age: 32,
}
const json = JSON.stringify(object)


const newObj = JSON.parse(json)
console.log(newObj)

//XHR - XML HTTP REQUEST
//XML - eXtensible Markup Language
//HTTP

const button = document.querySelector('.btn')
button.addEventListener('click', ()=> {
    const request = new XMLHttpRequest() // создание запроса
    request.open("GET","data.json") // объявления метода запроса и указывание пути
    request.setRequestHeader("Content-type","application/json")//указывание заголовка
    request.send()// отправка запроса
    request.addEventListener('load', ()=> {
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    })

})
