const formAppearBtn = document.querySelector(".formAppear");
let form = document.querySelector("form");
let notes = document.querySelector(".notes");

let allNotes = [];

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // console.log(newNote);

  const headVal = document.querySelector("#heading").value.trim();
  const descVal = document.querySelector("#description").value.trim();

  const newNote = {
    id: Date.now(),
    heading: headVal,
    description: descVal
  }

  notes.innerHTML = "";

  allNotes = [...allNotes, newNote];

  allNotes.forEach(function (singleNote, idx) {
    let noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    let head = document.createElement("h3");
    head.textContent = singleNote.heading;
    let desc = document.createElement("p");
    desc.textContent = singleNote.description;
    let delNote = document.createElement("button");
    delNote.classList.add("deleteBtn");
    delNote.textContent = "Delete";
    let edtNote = document.createElement("button");
    edtNote.classList.add("editBtn");
    edtNote.textContent = "Edit";
    noteCard.append(head);
    noteCard.append(desc);
    noteCard.append(delNote);
    noteCard.append(edtNote);
    notes.append(noteCard);
    // console.log(allNotes)
  })
  form.reset();
})

formAppearBtn.addEventListener("click", function () {
  form.style.display = "block";
})

