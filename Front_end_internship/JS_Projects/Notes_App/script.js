//^ Selection of the emements:-

const form = document.querySelector("form");
const notesDiv = document.querySelector(".notes");
const addNoteBtn = document.querySelector(".addNoteBtn")
let headingInput = document.querySelector("#heading");
let detailsInput = document.querySelector("#details");





//* All notes array:-
let notes = JSON.parse(localStorage.getItem("myNotes")) || [];
let isEditingId = null;





//* Add event to the form submition:-
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!headingInput.value.trim() || !detailsInput.value.trim()) {
    // Note creation toastify popup:-
    Toastify({
      text: "Heading and details cannot be empty!",
      duration: 3000,
      gravity: "top",
      position: "center",
      style: {
        background: "#dbcb23",
      },
    }).showToast();
    return;
  } else {
    //* When both empty then run:-
    if (isEditingId) {
      editNoteFunc();
    }
    else {
      addnote();
    }
  }
  renderNotes();
  localStorage.setItem("myNotes", JSON.stringify(notes));
  form.reset();
})


//* Add note function:-
function addnote() {
  const newNote = {
    id: Date.now(),
    heading: headingInput.value,
    details: detailsInput.value,
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


function editNoteFunc() {
  notes = notes.map(note => note.id === isEditingId ? { ...note, heading: headingInput.value, details: detailsInput.value } : note)
  isEditingId = null;
  addNoteBtn.textContent = "Add note";

  // Note Updation popup:-
  Toastify({
    text: "Note updated successfully!",
    duration: 3000,
    gravity: "top",
    position: "center",
    style: {
      background: "#374af2",
    },
  }).showToast();
}

//* Rendernotes function:-
function renderNotes() {
  notesDiv.innerHTML = "";

  if (notes.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.classList.add("emptyMsg");
    emptyMsg.textContent = "No notes created yet!"
    notesDiv.append(emptyMsg);
  } else {


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


//* Get edit button excess by event deligation:-
notesDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("editBtn")) {

    const editNote = e.target.closest(".note-card");

    const editId = Number(editNote.dataset.id);

    let editNdata = notes.find(note => note.id === editId);

    headingInput.value = editNdata.heading
    detailsInput.value = editNdata.details

    isEditingId = editId;
    addNoteBtn.textContent = "Update note";
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






































