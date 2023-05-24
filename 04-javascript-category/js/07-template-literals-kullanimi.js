// ************ Template Literals Kullanımı **************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "bilal"
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN

// console.log("Merhaba", userName, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${userName} sitemize hosgeldin. mail adresin: ${email}

kullanıcı isminizin baş harfi: ${userName[0]}

mail adresinin uzunlugu: ${email.length}

borcunuz: ${(2 + 3) * 10} TL

günün saat bilgisi: ${new Date().getHours()}:${new Date().getMinutes()}
`

console.log(info)