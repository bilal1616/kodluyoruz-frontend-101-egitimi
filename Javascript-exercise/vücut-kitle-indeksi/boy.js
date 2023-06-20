document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun varsayılan davranışını engelle

  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight)) {
    document.getElementById("result").innerHTML =
      "Lütfen geçerli bir boy ve kilo değeri girin.";
    return;
  }

  var bmi = weight / (height / 100) ** 2;

  var resultText;
  if (bmi < 18.5) {
    resultText = "Zayıf";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultText = "Normal";
  } else if (bmi >= 24.9 && bmi < 29.9) {
    resultText = "Fazla Kilolu";
  } else {
    resultText = "Obez";
  }

  document.getElementById("result").innerHTML =
    "Vücut Kitle İndeksi (BMI): " + bmi.toFixed(2) + "<br>Durum: " + resultText;
});
