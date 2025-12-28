//^ Selection of the emements:-

const form = document.querySelector("form");
const headingInp = document.querySelector("#heading");
const detailInp = document.querySelector("#details");
const notesDiv = document.querySelector(".notes");
const delNote = document.querySelector(".deleteBtn");
const edtNote = document.querySelector(".editBtn");



//^ NewNote fetched from the localstorage:-
let notes = JSON.parse(localStorage.getItem("myNotes")) || [];


//^ Add event listener to form:-
form.addEventListener("submit", function (e) {
  //* Default submittion off here⬇️:-
  e.preventDefault();

  //* Create the note:-
  if (!headingInp.value.trim() || !detailInp.value.trim()) {
    //* Both field data required toastify JS popup:-
    Toastify({
      text: "Heading and details cannot be empty!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#f4d524",
      },
    }).showToast();
    return;
  } else {
    //* NewNote create here:-
    const newNote = {
      id: Date.now(),
      noteHeading: headingInp.value.trim(),
      noteDetails: detailInp.value.trim()
    }
    notes = [...notes, newNote];

    //* Note Creation popup:-
    Toastify({
      text: "Note deleted successfully!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#0d9920",
      },
    }).showToast();

    //* NewNote created and saved in localstorage:-
    localStorage.setItem("myNotes", JSON.stringify(notes));
    renderNotes();
  }
  form.reset();
})


//^ Render the notes on UI:-
function renderNotes() {
  //* Initially we make it empty:-
  notesDiv.innerHTML = "";
  //* Render as per condition:-
  if (notes.length === 0) {
    let emptyMsg = document.createElement("p");
    emptyMsg.classList.add("emptyMsg")
    emptyMsg.textContent = "No notes have been created yet.!";
    notesDiv.appendChild(emptyMsg);
    return;
  } else {
    //* Loop each note element one by one:-
    notes.forEach((singleNote) => {

      let noteCard = document.createElement("div");
      noteCard.classList.add("note-card");
      noteCard.dataset.id = singleNote.id;

      let dataSec = document.createElement("div");
      dataSec.classList.add("data-sec");

      let noteHeading = document.createElement("h4");
      noteHeading.textContent = singleNote.noteHeading;

      let noteDetail = document.createElement("p");
      noteDetail.textContent = singleNote.noteDetails;

      let btnSec = document.createElement("div");
      btnSec.classList.add("btns")

      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.textContent = "Delete";

      let editBtn = document.createElement("button");
      editBtn.classList.add("editBtn");
      editBtn.textContent = "Edit";

      dataSec.append(noteHeading);
      dataSec.append(noteDetail);

      btnSec.append(deleteBtn);
      btnSec.append(editBtn);

      noteCard.append(dataSec);
      noteCard.append(btnSec);

      notesDiv.appendChild(noteCard);
    })
  }
}
renderNotes();


//^ Deletion of note:-
notesDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {

    //* search the closest note in notesDiv container:-
    let singleCard = e.target.closest(".note-card");

    //* finding the note id:-
    let noteId = Number(singleCard.dataset.id);

    //* filtering the notes:-
    notes = notes.filter(note => note.id !== noteId);

    //* Delete toastify JS popup:-
    Toastify({
      text: "Note deleted successfully!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#e50b0b",
      },
    }).showToast();

    //* Note updated after deletion of note:-
    localStorage.setItem("myNotes", JSON.stringify(notes));

    //* Render all notes after deletion of note:-
    renderNotes();
  }
})












































