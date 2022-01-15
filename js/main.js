// let firstPart = "likes";
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
//     text: {
//         age: 31,
//     },
// 	[firstPart]: true,
// };
// console.log(userInfo[firstPart]);

// // Преимущество квадратных скобок
// let key = "name";
// console.log(userInfo.age);
// console.log(userInfo.text.age);


// let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
// console.log(message);
// let bool = "5" > 4;
// console.log(typeof bool);

// let num = 0;
// do {
//     console.log(num);
//     num++
//     console.log(num);
// } while (num < 0);

// let count;
// for (let i = 1; i <= 5 ; i++) {
//     console.log(i);
//     if (i == 5) count = i;
// }
// console.log(`В не цикла: ${count}`);
/*
let count = 1;
do {
    console.log(count);
    count++;
} while (count <= 5);
*/
// let count = 1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// };

window.onload = function() {
	 var canvas = document.getElementById("drawingCanvas");
	 var context = canvas.getContext("2d");   
	   
	// Код для рисования вставляется сюда
};

// Задача №6. true или false ?
let text = 'фрилансер';
console.log(text.includes('лан', 4));


var checkbox = document.querySelector('input[type=checkbox]');
let light = document.querySelector('.light')
checkbox.onclick = function () {
    if (checkbox.checked) {
        light.classList.add("light_one");
    }else {
        light.classList.remove("light_one");
    }
}





console.log(checkbox);
console.log(light);
