// DOM etkinlikleriyle çalışmak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
    console.log("Tıklama İşlemi Başarılı")
    this.style.color == "blue" ? this.style.color = "black" : this.style.color = "blue"
}