// *********** String Veri Türü İşlemleri ************
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "bilalgonul1616@gmail.com"
let firstName = "bilal"
let lastName = "GÖNÜL"

// string karakter sayısı --> length
console.log(email.length)

// ilk karakteri bulmak --> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))


// büyük harf / küçük harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak --> search:
console.log(email.search("@"))
console.log(email[15])

// belli bir yere kadar al --> slice:
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf(".")) // sadece gmail kısmını aldık
)

// bilgiyi değiştir --> replace:
email = email.replace('gmail.com', 'hotmail.com')
console.log(email)

// istediğim bilgi var mı ? --> includes:
email.includes("@") ? console.log("mail adresi doğru") : console.log("mail adresi yanlış")

email.includes('skjald') ? console.log('ifade doğru') : console.log('ifade yanlış') // false

email.includes('@') // true

// istediğim bilgiyle başladı mı ? bitti mi ? --> startsWith,  endsWith:
email.startsWith('bilal') ? console.log('bilal ile başlıyor') : console.log('bilal ile başlamıyor')

console.log(
    email.startsWith('bilal')
)

email.endsWith('com') ? console.log('com ile bitti') : console.log('com ile bitmedi')

console.log(
    email.endsWith('.com')
)

// ilk harflerini büyük yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName)

firstName = "BİLAL"
lastName = "GÖNÜL"
let fullName2 = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName2)

// Concat - Metin birleştirme
let isim = "Eslem";
let soyad = "Gönül";

console.log(isim.concat(" ", soyad))

// charCodeAt – İndex Numarasına Göre Karakterin Unicode Değerini Bulma
let isim1 = "Bilal"
let soyad1 = "Gönül"

console.log(isim1.charCodeAt(1), soyad1.charCodeAt(0))