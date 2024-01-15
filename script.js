let input = document.querySelector(".add-list");
let btn = document.querySelector(".add-btn");
let para = document.querySelector(".para");
let mainContainer = document.querySelector(".mainContainer");
let check = document.querySelector(".fa-circle");
let delet = document.querySelector(".fa-trash");
let warning = document.querySelector(".warning");
let modeToggle = document.querySelector(".fa-solid");
let notes = document.querySelector(".notes");

modeToggle.addEventListener("click", function(e){
    let ele = document.body;
    ele.classList.toggle("dark-mode");
    modeToggle.classList.toggle("fa-moon");
    modeToggle.classList.toggle("fa-sun");
});

btn.addEventListener("click", function(){
    if(input.value == ""){
        warning.innerText = "Enter something";
    }
    else{
        warning.innerText = "";
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        listItem.innerHTML = 
        `<div class="add-box">
            <div class = "add-box-1">
                <i class="fa-solid fa-circle"></i>
                <p class="para">${input.value}</p>
            </div>
            <div class = "add-box-1">
                <img src="resources/pencil.png" alt="notes" class="notes">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div style="width: 100%;">
            <textarea class="notesArea textArea"></textarea>
        </div>`;
            mainContainer.appendChild(listItem);
            input.value = "";
    }
});

mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('fa-trash')){
        let parentDiv = e.target.parentElement;
        let grandparentDiv = parentDiv.parentElement;
        grandparentDiv.parentElement.remove();
    }
});

mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('fa-circle') || e.target.classList.contains('fa-circle-check')){
        e.target.nextElementSibling.classList.toggle("toggle-line");
        e.target.classList.toggle("fa-circle");
        e.target.classList.toggle("fa-circle-check");
    }
});

mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('notes')){
        let parentDiv = e.target.parentElement;
        let grandparentDiv = parentDiv.parentElement;
        let siblingDiv = grandparentDiv.nextElementSibling;
        let childDiv = siblingDiv.children[0];
        childDiv.classList.toggle("notesArea");        
    }
});



