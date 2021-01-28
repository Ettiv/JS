"use strict";

// new RegExp('pattern' , "flags");
// /patern/flags

const ans = prompt("ввердите ваше имя");

const reg = /n/i;
// i - независимо от регистра
// g - флаг глобальности - все по шаблону
// m


console.log(ans.search(reg));
console.log(ans.match(reg));

const pass = prompt("password?");

console.log(pass.replace(/./g , "*")); // все символы на звёздочки
// .-все сиволы

console.log(reg.test(ans)); // есть ли что то по патерну

// \d - цифры
// \w - все слова и буквы
// \s - все пробелы
// \D - не числа
// \W - не буквы
// \S - не пробелы



const str = "i am R2D2";
console.log(str.match(/\w\d\w\d/i));
