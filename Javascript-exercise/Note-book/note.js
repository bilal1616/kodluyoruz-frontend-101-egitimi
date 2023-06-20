var notes = [];

function addNote() {
  var input = document.getElementById("noteInput");
  var noteText = input.value;

  if (noteText === "") {
    alert("Lütfen bir not girin!");
    return;
  }

  var note = {
    id: Date.now(),
    text: noteText,
  };

  notes.push(note);

  displayNotes();

  input.value = "";
}

function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });

  displayNotes();
}

function displayNotes() {
  var noteList = document.getElementById("noteList");
  noteList.innerHTML = "";

  notes.forEach(function (note) {
    var listItem = document.createElement("li");
    listItem.className = "note-item";

    var noteText = document.createElement("span");
    noteText.className = "note-text";
    noteText.innerText = note.text;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Sil";
    deleteButton.onclick = function () {
      deleteNote(note.id);
    };

    listItem.appendChild(noteText);
    listItem.appendChild(deleteButton);

    noteList.appendChild(listItem);
  });
}
