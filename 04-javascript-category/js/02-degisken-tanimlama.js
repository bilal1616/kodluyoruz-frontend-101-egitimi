// ********** let ve const ile Degisken Tanimlama **********

// var ve let değişkende (atanan bilgi) birbiri ile değiştirilebilir...
// const ile (atanan bilgi) değiştirilemez...

// var ile degisken tanimlamak:

// var serverName = "api.kodluyoruz.org;"
// console.log(serverName)


// let ile değişkeni boş tanımlamak:
let serverName;
console.log(serverName)


// let ile değişkene bilgi atamak:
serverName= "https://kodluyoruz.org"
console.log(serverName)

// let ile değişkene bilgi atayarak tanımlamak:
let password = "01234";
console.log(password)


// değişken ataması yapmadan önce kullanmaya çalışmak:
/*Hatalı Kullanım*/
// console.log(fullName)
// let fullName = "Bilal Gönül"

/*Doğru Kullanım*/
// let fullName = "Bilal Gönül";
// console.log(fullName)
let fullName = "Bilal GönÜl";


// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName = "Eslem Gönül";
console.log(fullName)


// birleştirme veya ekleme işlemi:
fullName + "Yeni eklenen bilgi" // "hatalı atama" yeni eklenen bilgiyi atamaz
console.log(fullName + " Test Bilgisi") // Ekle ve göster ama değişkene eklemedik

fullName = fullName + " Yeni Bilgi Eklendi"
fullName = "2.Bilgi :" + fullName

fullName = "Sıfırlandı"
fullName += " ve Yeni bilgi eklendi"

fullName = "sıfırlandı"
fullName += " Yeni isim ekleyebiliriz"

fullName = "Yeni isim bilgisi"
fullName = fullName + " Bilal - Eslem Gönül"
console.log(fullName)

// const ile değişkeni boş tanımlamaya çalışmak:
// const serverPassword; // sadece değişken tanımlandı içi boş bırakıldı ??

// const ile değişken tanımlamak:
const SERVER_PASSWORD = "lşfdljfs152af1";
console.log(SERVER_PASSWORD)

// SERVER_PASSWORD = "1515rfsfee";
// console.log(SERVER_PASSWORD) // hata verir ??

