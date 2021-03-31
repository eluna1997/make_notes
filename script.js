showNotes();
//CREATE
const MakeBtn = document.getElementById("MakeBtn");
MakeBtn.addEventListener("click", function (e) {
    const Text = document.getElementById("Text");
    const notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(Text.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    Text.value = "";

    showNotes();
});
//STORE
function showNotes() {
    const notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;

    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML =`Make A Note!`;
    }
}
//DELETE
function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
