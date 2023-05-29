// **************** Karşılaştırma operatörleri ve mantıksal  operatörler ****************
// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user = "Bilal"

// == Eşitse
console.log("== :", price == 1)
console.log("== :", price == 100)

// === Hem değeri Hem de türü eşitse
console.log("=== :", price === 1)
console.log("=== :", price === 100)


// != Eşit değilse
console.log(user != "guest")

// < KÜÇÜKSE
console.log("price < 100", price < 100)

// <= Küçük veya Eşitse
console.log("price <= 100", price <= 100)

// > BÜYÜKSE
console.log("price > 100", price > 100)

// >= BÜYÜK veya Eşitse
console.log("price >= 100", price >= 100)

// && ve
price = 0
console.log(price > 0 && user != "guest")

// || veya
console.log(price > 0 || user != "guest")

// ! değil (tersi)
user = "guest"
price = 1
console.log(price > 0 && !user == "guest")