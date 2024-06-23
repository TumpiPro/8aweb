

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

let autoclick = document.getElementById("autoclicker")
function auto(){
    const targetElement = document.querySelector('#autoclicker');

        // Az autóclicker függvény, amely a kurzor helyére kattint
        function autoClickAtCursor() {
            const cursorX = event.clientX; // X koordináta
            const cursorY = event.clientY; // Y koordináta
            window.scrollTo(cursorX, cursorY); // Görgetés a kurzor helyére
            targetElement.click(); // Kattintás a cél elemre
        }

        // Eseményfigyelő hozzáadása a gombhoz
        targetElement.addEventListener('click', autoClickAtCursor);
	const targetElement = document.querySelector('#myButton');
        const clickInterval = 1000; // 1 másodpercenként kattintás

        function autoClick() {
            targetElement.click();
        }

        setInterval(autoClick, clickInterval);
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
