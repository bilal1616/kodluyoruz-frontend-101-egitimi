// ************ liste içerisindeki son elemana ulaşmak veya eleman eklemek ************

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öğe değişti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öğe değişti"

let centerChild = document.querySelector("ul#list>li:nth-child(2)")
centerChild.innerHTML = "orta öğe değişti"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi oluşturduğumuz yeni öğe"

ulDOM.append(liDOM) // en sona ekler
ulDOM.prepend(liDOM) // ilk öğeye ekler