// ********** number ***********
// number veri türü tanımlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV oranı:", tax,
    "KDV tutarı:", priceTax,
    "Fiyat:", total
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor içine bilgi gönderildi:", Number("111"))


// arttırma ve azaltma işlemleri:
let counter = 320
counter =  counter + 1 // uzun yöntem
counter += 1 // kısa yöntem
counter ++; // en kısa yöntem
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *=10;
console.log(counter)

counter /= 2;
console.log(counter)


// işlem önceliği:
console.log( 2 + 3 * 10)
console.log( (2 + 3) * 10)


// mod (kalan) alma %:
// sayı tek mi çift mi ??
console.log(10 % 2) // 0
console.log(11 % 2) // 1
console.log(794 % 3) // 2

// "X" ürün alan koliye tüm ürünler sığıyor mu ? 
console.log("Koli kalan Ürün Örneği: ", 141 % 8)

// üs alma **:
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

// aşağı yuvarlama işlemleri --> Math.floor():
console.log("Aşağı yuvarlama:", Math.floor(1.9))

// yukarı yuvarlama işlemleri --> Math.ceil():
console.log("Yukarı yuvarlama:", Math.ceil(1.3))

// yakına yuvarlama işlemleri --> Math.round():

console.log("Yakına yuvarlama:", Math.round(1.4))