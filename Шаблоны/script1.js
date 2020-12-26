"use strict";

const box = document.getElementById('box'); // взять элемент по айди

console.log(box);

const btns = document.getElementsByTagName('button');//сохраняет в массив всё,что под передовамом тегом
const btns1 = document.getElementsByTagName('button')[1];//сохраняет 2 кнопку

console.log(btns);
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart'); // по CSS селектору

hearts.forEach(item  => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // берёт первый встреченный по селектору

console.log(oneHeart);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';

let num = 500;

box.style.cssText = `background-color: blue; widh:${num}px`;

const div = document.createElement('div'); //создаём div только внутри скрипта

div.classList.add('black'); // добавляем класс black из css

document.body.append(div); // добавление div в HTML в тег body в уонец

const wrapper = document.querySelectorAll('.wrapper');

//wrapper.prepend(div); //добавление div в HTML в тег body в начало

hearts[0].before(div);//вставляет перед элементом в HTML
hearts[0].after(div);//вставляет после элементом в HTML

circles[0].remove(); //удаляет элемент

hearts[0].replaceWith(circles[0]); // меняет место
 

//устаревшие:
// wrapper.appendChild(div);
// wrapper.insertBefore(div , hearts[0]); 
// wrapper.removeChild(hearts[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hellow world</h1>"; // добавляет HTML структуры

div.textContent = 'hellow'; // только с текстом
//В ЦЕЛЯХ БЕЗОПАСНОСТИ. Если используется,то что ввёл пользователь

div.insertAdjacentHTML('beforebegin', '<h2>Hellow</h2>');// вставляет перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hellow</h2>');// вставляет в начало элемента
div.insertAdjacentHTML('beforeend', '<h2>Hellow</h2>');// вставляет перед концом
div.insertAdjacentHTML('afterend', '<h2>Hellow</h2>');// вставляет после элемента