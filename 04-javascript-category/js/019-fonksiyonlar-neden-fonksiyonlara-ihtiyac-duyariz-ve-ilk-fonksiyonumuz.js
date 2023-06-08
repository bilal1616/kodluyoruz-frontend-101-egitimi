// ** İlk Fonksiyonumuzu Tanımlamak: **

function helloWorld() {
    console.log("Hello World");
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}

hello()

// hata alırız (fonskiyon içindeki bilgiler tanımsız)

// function userCheck () {
//     if (username && age >= 18){
//         info.innerHTML = "Ehliyet alabilirsiniz " + username
//     } else if (!username){
//         info.innerHTML = "Kullanıcı adınız yok"
//     } else if ( !(age >= 18)){
//         info.innerHTML = username + " Yaş bilginiz yok veya 18 yaşından küçüksünüz"
//     }
// }

// userCheck()