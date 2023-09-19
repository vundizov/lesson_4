
const cards = document.querySelector('.cards')


const json = ()=> {
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    request.addEventListener('load', ()=>{
        const people = JSON.parse(request.response)
        people.forEach(persons => {
            const person = document.createElement('div')
            person.setAttribute("class","person-card")
            person.innerHTML = `
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="img">
                <h3>${persons.name}</h3>
                <span>${persons.age}</span>
            `
            cards.append(person)
        })
    })
}
json()

const newRequest = new XMLHttpRequest()
newRequest.open('GET','data1.json')
newRequest.setRequestHeader('Content-type','application/json')
newRequest.send()
newRequest.addEventListener('load', ()=>{
    const contend = JSON.parse(newRequest.response)
    console.log(contend)
})




