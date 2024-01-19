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
                <i class="fa-solid fa-hourglass-end"></i>
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

let hourglass = document.querySelector(".fa-hourglass-end");
let maincontainer = document.querySelector(".main-container");
let block = document.querySelector(".block");
mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains('fa-hourglass-end')){
        block.classList.add("bgBlack");
        maincontainer.classList.remove("toggle");
    }
});

let close = document.querySelector(".fa-circle-xmark");
close.addEventListener("click", function(e){
    block.classList.remove("bgBlack");
    maincontainer.classList.add("toggle");
    resetClock();
});

function scroll(e, size, curr){
    const deltaY = e.deltaY;
    if(!started){
        if(deltaY > 0){
            curr = (curr+1) % size;
        }
        else{
            curr = (curr - 1 + size) % size;
        }
    }
    return curr;
}

let hrDigitOne = document.querySelector(".hr-digit-1");
let hrDigitTwo = document.querySelector(".hr-digit-2");
let hr1 = document.querySelector(".hr-1");
let hr2 = document.querySelector(".hr-2");
let m = 0;
let n = 0;
hrDigitOne.addEventListener("wheel", function(e){
    m = scroll(e, 3, m);
    hr1.innerHTML = m;
});
hrDigitTwo.addEventListener("wheel", function(e){
    if(hr1.innerHTML < 2){
        n = scroll(e, 10, n);
    }
    else{
        n = scroll(e, 4, n);
    }
    hr2.innerHTML = n;
});

let minDigitOne = document.querySelector(".min-digit-1");
let minDigitTwo = document.querySelector(".min-digit-2");
let min1 = document.querySelector(".min-1");
let min2 = document.querySelector(".min-2");
let i = 0;
let j = 0; 
minDigitOne.addEventListener("wheel", function(e){
    i = scroll(e, 6, i);
    min1.innerHTML = i;
});
minDigitTwo.addEventListener("wheel", function(e){
    j = scroll(e, 10, j);
    min2.innerHTML = j;
});

let secDigitOne = document.querySelector(".sec-digit-1");
let secDigitTwo = document.querySelector(".sec-digit-2");
let sec1 = document.querySelector(".sec-1");
let sec2 = document.querySelector(".sec-2");
let k = 0;
let l = 0;
secDigitOne.addEventListener("wheel", function(e){
    k = scroll(e, 6, k);
    sec1.innerHTML = k;
});
secDigitTwo.addEventListener("wheel", function(e){
    l = scroll(e, 10, l);
    sec2.innerHTML = l;
});


let start = document.querySelector(".fa-circle-play");
let started = false;
let hr, min, sec, time;
start.addEventListener("click", function(e){
    hr = m * 10 + n;
    min = i * 10 + j;
    sec = k * 10 + l;
    if(hr > 23){
        hr = 23;
        min = 59;
        sec = 59;
    }
    if(!started){
        time = setInterval(timer, 1000);
        started = true;
    }
});

function timer(){
    sec--;
    if(sec < 0){
        sec = 59;
        min--;
        if(min < 0){
            min = 59;
            hr--;
            if(hr < 0){
                resetClock();
            }
        }
    }
    calcDigits();
    setInnerHTML();
}

function calcDigits(){
    l = sec % 10;
    k = Math.floor((sec/10))%10;
    j = min % 10;
    i = Math.floor((min/10))%10;
    n = hr % 10;
    m = Math.floor((hr/10))%10;
}

function setInnerHTML(){
    hr1.innerHTML = m;
    hr2.innerHTML = n;
    min1.innerHTML = i;
    min2.innerHTML = j;
    sec1.innerHTML = k;
    sec2.innerHTML = l;
}

let reset = document.querySelector(".fa-rotate-right");
reset.addEventListener("click", function(e){
    resetClock();
});

function resetClock(){
    clearInterval(time);
    hr = 0;
    min = 0;
    sec = 0;
    started = false;
    calcDigits();
    setInnerHTML();
}