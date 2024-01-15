let input = document.querySelector(".add-list");
let btn = document.querySelector(".add-btn");
let para = document.querySelector(".para");
let mainContainer = document.querySelector(".mainContainer");
let check = document.querySelector(".fa-circle");
let delet = document.querySelector(".fa-trash");
let warning = document.querySelector(".warning");
let modeToggle = document.querySelector(".fa-solid");

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
        `<div>
            <i class="fa-solid fa-circle"></i>
            <p class="para">${input.value}</p>
        </div>
        <i class="fa-solid fa-trash"></i>`;
        mainContainer.appendChild(listItem);
        input.value = "";
    }
});

mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
});

mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('fa-circle') || e.target.classList.contains('fa-circle-check')){
        e.target.nextElementSibling.classList.toggle("toggle-line");
        e.target.classList.toggle("fa-circle");
        e.target.classList.toggle("fa-circle-check");
    }
});




