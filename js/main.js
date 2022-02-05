let display = document.querySelector('.view');
let operators = document.querySelectorAll('.operators');
let numbers = document.querySelectorAll('.nb');
let clean = document.querySelector('.clean');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equals');


for (let number of numbers) {
    number.addEventListener('click', function () {
        display.innerHTML += this.innerHTML
    })
}
clean.addEventListener('click', function () {
    let arr = display.innerHTML.split('');
    arr.pop()
    display.innerHTML = arr.join('');
});
clear.addEventListener('click', function () {
    display.innerHTML = '';
});