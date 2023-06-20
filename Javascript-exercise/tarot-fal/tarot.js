var cardMeanings = [
  {
    name: "Delilik",
    meaning: "Yeni başlangıçlar, spontane davranışlar, masumiyet",
  },
  { name: "Sihirbaz", meaning: "İrade, istek, gerçekleştirme" , Image: "https://3.bp.blogspot.com/-sBcNXxeoeMM/UjdlbWPMEEI/AAAAAAAAP1Q/gk3jMCGRE2M/s1600/1.jpg"},
  { name: "Yüksek Rahibe", meaning: "Sezgi, gizem, içsel bilgi", Image:"https://s0.smartresize.com/wallpaper/451/240/HD-wallpaper-high-priestess-cards-fortunetelling-priestess-tarot-tarot-card.jpg"},
  { name: "İmparatoriçe", meaning: "Bolluk, bereket, besleyicilik", Image:"https://static.wixstatic.com/media/3d9028_fb2a2a1989884da5949f4e34327fab33~mv2.png/v1/fill/w_220,h_392,al_c/3d9028_fb2a2a1989884da5949f4e34327fab33~mv2.png"},
  { name: "İmparator", meaning: "Otorite, yapı, liderlik", Image:"https://denizinyildizi.com/wp-content/uploads/2018/12/tarot-karti-imparator-www.denizinyildizi.com_.png"},
  { name: "Hierofof", meaning: "Gelenek, ruhsallık, uyum", Image:"https://1.bp.blogspot.com/-g9eO0XGBGxY/YFddhloejUI/AAAAAAAAFRs/IpI-i932ftcIOpYLsyg_qIMyPs6EnpsSgCLcBGAsYHQ/s532/hieropant.PNG"},
  { name: "Aşıklar", meaning: "Aşk, uyum, ilişkiler", Image:"https://static.wixstatic.com/media/3d9028_8cb629cf64814b0097b0b2671b4f3b5e~mv2.png/v1/fill/w_372,h_630,al_c,lg_1,q_85,enc_auto/Queen%20of%20wands.png"},
  { name: "Savaş Arabası", meaning: "Kararlılık, başarı, irade", Image:"https://www.myburc.com/assets/img/tarot_kartlari/savas_arabasi_tarot_karti.png"},
  { name: "Güç", meaning: "Cesaret, içsel güç, sabır", Image:"https://www.myburc.com/assets/img/tarot_kartlari/guc_tarot_karti.png"},
  { name: "Keşiş", meaning: "Ruh arayışı, iç gözlem, yalnızlık", Image:"https://www.myburc.com/assets/img/tarot_kartlari/keseis_tarot_karti.png"},
  { name: "Kader Çarkı", meaning: "Değişim, kader, döngüler", Image:"https://www.myburc.com/assets/img/tarot_kartlari/kader_carki_tarot_karti.png"},
  { name: "Adalet", meaning: "Adalet, denge, gerçek", Image:"https://www.myburc.com/assets/img/tarot_kartlari/adalet_tarot_karti.png"},
  { name: "Asılı Adam", meaning: "Bırakma, teslim olma, yeni bakış açıları", Image:"https://www.myburc.com/assets/img/tarot_kartlari/asil_adam_tarot_karti.png"},
  { name: "Ölüm", meaning: "Dönüşüm, sonlar, yeni başlangıçlar", Image:"https://www.myburc.com/assets/img/tarot_kartlari/olum_tarot_karti.png"},
  { name: "Temsile", meaning: "Denge, uyum, ılımlılık", Image:"https://www.myburc.com/assets/img/tarot_kartlari/temsile_tarot_karti.png"},
  { name: "Şeytan", meaning: "Cezbedicilik, bağımlılık, maddiyat", Image:"https://www.myburc.com/assets/img/tarot_kartlari/seytan_tarot_karti.png"},
  { name: "Kule", meaning: "Yıkım, sarsıntı, aydınlanma", Image:"https://www.myburc.com/assets/img/tarot_kartlari/kule_tarot_karti.png"},
  { name: "Yıldırım", meaning: "Sürpriz, değişim, beklenmedik olaylar", Image:"https://www.myburc.com/assets/img/tarot_kartlari/yildirim_tarot_karti.png"},
  { name: "Ay", meaning: "Bilinçaltı, duygusal yolculuk, sezgiler", Image:"https://www.myburc.com/assets/img/tarot_kartlari/ay_tarot_karti.png"},
  { name: "Güneş", meaning: "Mutluluk, başarı, aydınlanma", Image:"https://www.myburc.com/assets/img/tarot_kartlari/gunes_tarot_karti.png"},
  { name: "Yargıç", meaning: "Yargılama, yeniden doğuş, kurtuluş", Image:"https://www.myburc.com/assets/img/tarot_kartlari/yargici_tarot_karti.png"},
  { name: "Dünya", meaning: "Tamamlanma, bütünlük, başarı", Image:"https://www.myburc.com/assets/img/tarot_kartlari/dunya_tarot_karti.png"},
];

function getRandomCard() {
  var index = Math.floor(Math.random() * cardMeanings.length);
  var card = cardMeanings[index];
  document.getElementById("result").innerHTML =
    "<h2>" + card.name + "</h2><p>" + card.meaning + "</p>" + "<img src=" + card.Image + ">";
}
