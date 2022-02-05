let allelements = document.querySelectorAll('button');
let display = document.querySelector('.display');
let view = document.querySelector('.view');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.nb');
let clean = document.querySelector('.clean');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');
// =====================displaySize=========================

const viewWidth = view.offsetWidth;
function displaySize() {
    display.classList.remove('newSize');
    if (display.offsetWidth >= viewWidth) {
        display.classList.add('newSize');
    }
    

}

// изьятие ","
let dot;
for (let elem of operators) {
    if (elem.innerHTML == ',') {
        dot = elem;
    }
}

// всем кнопкам кроме "," clean, clear, equals повесить событие.
for (let elem of allelements) {
    if (elem.className !== "number clean" && elem.className !== "number clear" 
    && elem.className!== "equals" && elem.innerHTML !== ",") {
        elem.addEventListener('click', function () {
            display.innerHTML += this.innerHTML
            displaySize()
        })
    }
}










dot.addEventListener('click', function () {
    if (display.innerHTML == '' && dot.innerHTML !== display.innerHTML) {
        display.innerHTML = dot.innerHTML
        displaySize()
    }
    if (Number.isInteger(+display.innerHTML )) {
        display.innerHTML += dot.innerHTML
        displaySize()
    }
});


clean.addEventListener('click', function () {
    let arr = display.innerHTML.split('');
    arr.pop()
    display.innerHTML = arr.join('');
    displaySize()
});
clear.addEventListener('click', function () {
    display.innerHTML = '';
    displaySize()
});
