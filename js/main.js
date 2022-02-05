let allelements = document.querySelectorAll('button');
let display = document.querySelector('.view');
let operators = document.querySelectorAll('.operator');
let numbers = document.querySelectorAll('.nb');
let clean = document.querySelector('.clean');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');


for (let elem of allelements) {
    if (elem.className !== "number clean" && elem.className !== "number clear" && elem.className!== "equals" ) {
        elem.addEventListener('click', function () {
            display.innerHTML += this.innerHTML
        })
    }
}
clean.addEventListener('click', function () {
    let arr = display.innerHTML.split('');
    arr.pop()
    display.innerHTML = arr.join('');
});
clear.addEventListener('click', function () {
    display.innerHTML = '';
});

// for (let elem of operators) {
//         elem.addEventListener('click', function () {
//             display.innerHTML
//         });
// }