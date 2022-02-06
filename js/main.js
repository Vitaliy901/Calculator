let allelements = document.querySelectorAll('button');
let display = document.querySelector('.display');
let view = document.querySelector('.view');
let operators = document.querySelectorAll('.operator');
let clean = document.querySelector('.clean');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');

// =====================displaySize=========================

const viewWidth = view.offsetWidth - 10;
function displaySize() {
    display.classList.remove('newSize');
    if (display.offsetWidth >= viewWidth) {
        display.classList.add('newSize');
    }
}

// получение "," из масива 
let dot;
for (let elem of operators) {
    if (elem.innerHTML == ',') {
        dot = elem;
    }
}

// всем кнопкам кроме "," clean, clear, equals вешает событие.
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
    if (display.innerHTML == '' && '.' !== display.innerHTML) {
        display.innerHTML = '.'
        displaySize()
    }
    if (Number.isInteger(+display.innerHTML )) {
        display.innerHTML += '.'
        displaySize()
    }
});
// стереть символ.
clean.addEventListener('click', function () {
    let arr = display.innerHTML.split('');
    arr.pop()
    display.innerHTML = arr.join('');
    displaySize()
});
// очистить поле.
clear.addEventListener('click', function () {
    display.innerHTML = '';
    displaySize()
});

//========================equal=======================
equal.addEventListener('click', calc);


//==============calc=====================
function calc(elem) {
    if (condition) {
        
    }
}
