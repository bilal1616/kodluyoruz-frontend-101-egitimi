function getFortune() {
    var fortunes = [
      "Bir sürpriz seni bekliyor olabilir.",
      "Yakın zamanda eski bir arkadaşınla karşılaşabilirsin.",
      "Hayatında büyük bir değişim yaklaşıyor.",
      "Yakında yeni bir fırsatla karşılaşabilirsin.",
      "Bir seyahat planı yapman iyi olabilir.",
      "Aşk hayatında olumlu gelişmeler olabilir.",
      "Para Para Para Zenginlik yoksa kapıda mı ?",
      "İşler yolunda gitmiyor mu ? Yolunda engel olanları hayatından çıkar..."
    ];

    var randomIndex = Math.floor(Math.random() * fortunes.length);
    var fortune = fortunes[randomIndex];

    document.getElementById("result").innerHTML = fortune;
  }