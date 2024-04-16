console.log("Hello Majmok")

alert("Figyelem ez az oldal egy poén az osztájtársaim részére!!!\n(HA TE NEM VAGY ŐK HAGYD EL AZ OLDALT)")

let név = "Buznyák Péter"

let bemenet = document.getElementById("bemenet")
let ertek = bemenet.value
console.log(ertek)
bemenet.value = ""

document.body.style.backgroundColor = "Pink"

let gomb = document.getElementById("Kattgom")
function katt(){
    console.log("Gombra katt")
    let randomColor = Math.floor(Math.random() * 1677722).toString(16)
    document.body.style.backgroundColor = "#"+randomColor
    window.open("http://www.pornhub.com", "_blank")

    let ujszüveg = document.createElement("h1")
    ujszüveg.innerText = "Rákattintottál"
    document.body.appendChild(ujszüveg)
}
gomb.addEventListener("click", katt)
