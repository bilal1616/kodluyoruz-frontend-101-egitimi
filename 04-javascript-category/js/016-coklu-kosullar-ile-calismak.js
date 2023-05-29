// ************* Çoklu koşullarla çalışmak ****************

let username = prompt("Kullanıcı Adınızı Giriniz :");
let age = prompt("Yaşınızı Giriniz: ");
let info = document.querySelector("#info");

if (username && age >= 18){
    info.innerHTML = "Ehliyet alabilirsiniz " + username
} else if (!username){
    info.innerHTML = "Kullanıcı adınız yok"
} else if ( !(age >= 18)){
    info.innerHTML = username + " Yaş bilginiz yok veya 18 yaşından küçüksünüz"
}

let weather = prompt("Hava sıcaklığını girin: ")
let info2 = document.querySelector("#info2");

if (weather >= 25){
    info2.innerHTML = "Hava Güneşli ve sıcak"
} else if (weather >= 10 && weather <= 25){
    info2.innerHTML = "Hava Güneşli ve ılık"
} else if (weather <= 10 ){
    info2.innerHTML = "Hava Soğuk ve yağışlı"
}