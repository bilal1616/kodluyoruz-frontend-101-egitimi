let myName = prompt("İsminizi giriniz: ")
document.querySelector("#myName").innerHTML = myName


let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${new Date().toLocaleString()}`

setInterval(() => {
    myClock.innerHTML = `${new Date().toLocaleString()}`
})