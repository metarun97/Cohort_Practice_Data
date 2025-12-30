//^ Selection of the emements:-

const form = document.querySelector("form");
const headingInput = document.querySelector("#heading");
const detailsInput = document.querySelector("#details");
const notesDiv = document.querySelector(".notes");
const addNoteBtn = document.querySelector(".editBtn")

//* Add event to the form submition:-
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const headInp = headingInput.value.trim();
  const detsInp = detailsInput.value.trim();

  //* When both empty then run:-
  if ((!headInp && !detsInp)) {
    // Note creation toastify popup:-
    Toastify({
      text: "Heading and details cannot be empty!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#f4d524",
      },
    }).showToast();
    return
  }
  addnote(headInp, detsInp);
  form.reset();
})


//* All notes array:-
let notes = JSON.parse(localStorage.getItem("myNotes")) || [];


//* Add note function:-
function addnote(heading, details) {
  const newNote = {
    id: Date.now(),
    heading: heading,
    details: details,
  }
  notes.push(newNote);

  localStorage.setItem("myNotes", JSON.stringify(notes));

  // Note Creation popup:-
  Toastify({
    text: "Note deleted successfully!",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: "#0d9920",
    },
  }).showToast();
  renderNotes();
}


//* Rendernotes function:-
function renderNotes() {
  notesDiv.innerHTML = "";

  notes.forEach((singleNote) => {
    let noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.dataset.id = singleNote.id;

    let dataSec = document.createElement("div");
    dataSec.classList.add("data-sec");

    let noteHeading = document.createElement("h4");
    noteHeading.textContent = singleNote.heading;

    let noteDetail = document.createElement("p");
    noteDetail.textContent = singleNote.details;

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
renderNotes();


//* Delete note function:-
function deleteNoteFun(id) {
  notes = notes.filter(note => note.id !== id);

  localStorage.setItem("myNotes", JSON.stringify(notes));
  renderNotes();

  // Note Deletion toastify popup:-
  Toastify({
    text: "Note deleted successfully!",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: "#e50b0b",
    },
  }).showToast();
}


//* Edit note function:-

let isEditing = false;

//* Get edit button excess by event deligation:-
notesDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {

    const editNote = e.target.closest(".note-card");

    const editId = Number(editNote.dataset.id);

    let editNdata = notes.find(note => note.id === editId);

    console.log(editNdata.id);
  }
})

//* Get delete button excess by event deligation:-
notesDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {

    const deleteNote = e.target.closest(".note-card");

    const deletNoteId = Number(deleteNote.dataset.id);

    deleteNoteFun(deletNoteId);
  }
})






































