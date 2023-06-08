// İNPUT içindeki değeri(value) almak

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault(); // default işlemi engelledik
  console.log("islem gerçekleşti");
  let scoreInputDOM = document.querySelector("#score");
  console.log(scoreInputDOM.value);
  localStorage.setItem("score", scoreInputDOM.value);
}



function sampleFunction() {
  var at = document.getElementById("email").value.indexOf("@");
  var age = document.getElementById("age").value;
  var fname = document.getElementById("fname").value;
  submitOK = "true";

  if (fname.length > 10) {
    alert("Ad en fazla 10 karakter içerebilir");
    submitOK = "false";
  }

  if (isNaN(age) || age < 1 || age > 100) {
    alert("Yaş, 1 ile 100 arasında bir sayı olmalıdır");
    submitOK = "false";
  }

  if (at == -1) {
    alert("Geçerli bir e-posta değil!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }
}
