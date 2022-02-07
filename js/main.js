let allelements = document.querySelectorAll('button');
let display = document.querySelector('.display');
let view = document.querySelector('.view');
let clean = document.querySelector('.clean');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');

let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide= document.querySelector('#divide');
let factorial = document.querySelector('#factorial');
let percent = document.querySelector('#percent');

let strInner = '';
let earlyResult = '';
let earlyResultInner = '';
let viewFix = 0;
//====================operators=============================

subtract.addEventListener('click', function () {
    if (strInner.slice(-1) !== "-" ) {
        display.innerHTML += this.innerHTML
        strInner += "-"
    }
    
})
multiply.addEventListener('click', function () {
    if (strInner.slice(-1) !== "*" ) {
        display.innerHTML += this.innerHTML
        strInner += "*"
    }
})
divide.addEventListener('click', function () {
   if (strInner.slice(-1) !== "/" ) {
    display.innerHTML += this.innerHTML
    strInner += "/"
   }
})
factorial.addEventListener('click', function () {
    display.innerHTML += this.innerHTML

})
percent.addEventListener('click', function () {
    if (!strInner.includes('%')) {
        display.innerHTML += this.innerHTML
        strInner += '%'
       }
})
equal.addEventListener('click', calc);

// всем кнопкам кроме "," clean, clear, equals вешает событие.
for (let elem of allelements) {
    if (elem.className !== "number clean" && elem.className !== "number clear" 
    && elem.className!== "equals" && elem.innerHTML !== "," && elem.id !== subtract.id &&
    elem.id !== multiply.id && elem.id !== divide.id && elem.id !== factorial.id && elem.id !== percent.id) {
        elem.addEventListener('click', function () {
            display.innerHTML += this.innerHTML
            displaySize()
            strInner += this.innerHTML
        })
    }
}

// =====================displaySize=========================
const viewWidth = view.offsetWidth - 10;
const viewHeight = view.offsetHeight;
console.log(viewHeight)
function displaySize() {
    display.classList.remove('newSize2rem');
    if (display.offsetWidth >= viewWidth) {
        display.classList.add('newSize2rem');
    }
}


// получение "," из масива 
let dot;
for (let elem of allelements) {
    if (elem.innerHTML == ',') {
        dot = elem;
    }
}

dot.addEventListener('click', function () {

let lastNum = strInner.substr(strInner.split(/[*/%+\-]/g).join('-').lastIndexOf('-') +1);

    if (display.innerHTML == '' && '.' !== display.innerHTML) {
        display.innerHTML = '.'
        strInner += '.'
        displaySize()
    } else if (!lastNum.includes('.')) {
        display.innerHTML += '.'
        strInner += '.'
        displaySize()
    }


});

// стереть символ.
clean.addEventListener('click', function () {
    let arr = display.innerHTML.split('');
    arr.pop();
    display.innerHTML = arr.join('');
    
    let arrInner = strInner.split('')
    arrInner.pop();
    strInner = arrInner.join('');

});

// очистить поле.
clear.addEventListener('click', function () {
    display.innerHTML = '';
    displaySize()
    strInner = '';
    earlyResult = '';
});

//==============calc=====================
function calc() {
    // console.log(strInner);
    // console.log(display.innerHTML);

    if (display.innerHTML.includes("%")) {
        let arr = display.innerHTML.split('%');
        earlyResult = display.innerHTML;
        earlyResultInner  =  strInner;
        strInner = '' + prcnt(arr[0], arr[1]);
        return display.innerHTML = '' + prcnt(arr[0], arr[1]);
       
    }

    if (display.innerHTML != String(eval(strInner)) && display.innerHTML != '' && strInner != '' ) {
        earlyResult = display.innerHTML;
        earlyResultInner  =  strInner;
        strInner = String(eval(strInner));
        return display.innerHTML = String(eval(strInner));
       
    }
    
    display.innerHTML = earlyResult;
    strInner = earlyResultInner;
}
//================percent======================
function prcnt(a, b) {
    return a * b / 100;
}