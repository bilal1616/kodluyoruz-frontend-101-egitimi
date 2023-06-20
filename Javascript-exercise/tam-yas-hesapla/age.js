document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun varsayılan davranışını engelle

  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth() + 1;
  var currentDay = currentDate.getDate();

  var ageYears = currentYear - year;
  var ageMonths = currentMonth - month;
  var ageDays = currentDay - day;

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
  }

  if (ageDays < 0) {
    var daysInPreviousMonth = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    ageDays += daysInPreviousMonth;
    ageMonths--;
  }

  document.getElementById("result").innerHTML =
    "Tam Yaş: " + ageYears + " yıl, " + ageMonths + " ay, " +  ageDays + " gün, ";
});
