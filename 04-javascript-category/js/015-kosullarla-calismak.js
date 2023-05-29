// ****************** Koşullarla Çalışmak (if/else) ********************
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else


// eğer kullanıcı bilgisi varsa ekrana ismini yazdır
// eğer (username.length > 0) {console.log(username)} değilse {console.log("Kullanıcı bilginiz yok")}
// if (username.length > 0) {console.log(username)} else {console.log("Kullanıcı bilginiz yok")}

let username = prompt("Kullanıcı Adınızı Giriniz:") // if kısmı true ise çalışır

if (username) {
    document.write(`Kullanıcı bilginiz ${username}`)
} else {
    document.write("Kullanıcı bilginiz yok")
}