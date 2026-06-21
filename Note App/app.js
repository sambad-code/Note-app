let addNoteBtn = document.querySelector(".add-note")
let modeBtn = document.querySelector(".mode")
let closeBtn = document.querySelector(".close-btn")
let noteTitle = document.querySelector(".note-title")
let noteContent = document.querySelector(".note-content")
let cancelBtn =document.querySelector(".cancelBtn")
let saveBtn = document.querySelector(".saveBtn")
let noteContainer = document.querySelector(".add-new-note-container")
let noteDisplay = document.querySelector(".note-display")
let mode = "light";
let editingNote = null;

modeBtn.addEventListener("click",()=>{
    if(mode === "light"){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      modeBtn.innerText = "☀️";
      mode = "dark"

    }
    else{
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      modeBtn.innerText = "🌙";
      mode = "light"
    }
})

function hideBox(){
    noteContainer.classList.add("hide");
}
hideBox()

addNoteBtn.addEventListener("click",()=>{
    noteContainer.classList.remove("hide");
    
})

closeBtn.addEventListener("click", hideBox)
cancelBtn.addEventListener("click",hideBox)



saveBtn.addEventListener("click", ()=>{
    let titleText = noteTitle.value.trim();
    let contentText = noteContent.value.trim();

    if(noteContent.value === "" ||
    noteTitle.value === ""){
        alert("please enter your note content and title")
    }
    else{


        function createNote(){

        let newDiv = document.createElement("div")
        newDiv.classList.add("noteDiv")


        newDiv.innerHTML = `
        <div class="div_one">
        <button class="edit-btn"><img src="icons/pencil-line.png"></button>
        <button class="delete-btn"><img src="icons/delete-bin-line.png"></button>
        </div>
        <h2>${titleText}</h2>
        <p>${contentText}</p>`;


        noteDisplay.appendChild(newDiv);



        let editBtn = document.querySelector(".edit-btn")

        editBtn.addEventListener("click", () => {
            console.log("button is clicked")
            noteContainer.classList.remove("hide");

            noteTitle.value = newDiv.querySelector('h2').textContent;
            noteContent.value = newDiv.querySelector('p').textContent;

        });
        

        noteTitle.value = "";
        noteContent.value = "";



        let deleteBtn = newDiv.querySelector(".delete-btn")
        deleteBtn.addEventListener('click', () => {
        console.log("deletebtn is clicked")
        newDiv.remove(); 
        });

        }
        createNote()
        hideBox()


    }
})



