// **************** ternany operatör ile short if kullanımı *****************

// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz

let userName = prompt("Kullanıcı Bilginizi Yazınız")
let info = document.querySelector("#info")

info.innerHTML = `${userName ? userName : "Kullanıcı bilginiz bulunamadı :/"}`