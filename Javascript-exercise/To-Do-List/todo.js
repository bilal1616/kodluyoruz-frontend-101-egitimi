var taskId = 1; // Başlangıç id değeri

function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;

  if (task === "") {
    alert("Lütfen bir görev girin!");
    return;
  }

  var listItem = document.createElement("li");

  var taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.innerText = task;

  var taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  var taskDate = document.createElement("span");
  taskDate.innerText = getFormattedDate();

  var taskTime = document.createElement("span");
  taskTime.innerText = getFormattedTime();

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "Sil";
  deleteButton.onclick = function () {
    this.parentNode.parentNode.remove();
  };

  listItem.appendChild(taskText);
  taskInfo.appendChild(taskDate);
  taskInfo.appendChild(taskTime);
  listItem.appendChild(taskInfo);
  listItem.appendChild(deleteButton);

  var taskList = document.getElementById("taskList");
  taskList.appendChild(listItem);

  input.value = "";
  taskId++; // Her yeni görev için id değerini bir artır
}

function getFormattedDate() {
  var currentDate = new Date();

  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  var formattedDate = day + "/" + month + "/" + year;

  return formattedDate;
}

function getFormattedTime() {
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();

  var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;

  return formattedTime;
}
