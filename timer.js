let background = document.querySelector(".background");
let mainContainer = document.querySelector(".main-container");

let appear = document.querySelector(".appear");
appear.addEventListener("click", function(e){
    mainContainer.classList.toggle("toggle");
    background.classList.toggle("toggle");
});
let close = document.querySelector(".fa-circle-xmark");
close.addEventListener("click", function(e){
    mainContainer.classList.toggle("toggle");
    background.classList.toggle("toggle");
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