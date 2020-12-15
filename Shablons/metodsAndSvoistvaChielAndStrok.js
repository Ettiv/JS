"use strict";

const t = "rwtgwgw";

console.log(t.length);

const arr = [1 , 4, 5];

console.log(arr.length);

console.log(t[3]);

console.log(t.toUpperCase());
console.log(t.toLowerCase());

const fruit = "some fruit";

console.log(fruit.indexOf("fruit"));
// возвращает индекс начала искомого,иначе -1

const logg = "hellow world";
console.log(logg.slice(6 , 11));
console.log(logg.slice(6));
console.log(logg.slice(-5 , -1));
console.log(logg.substring(6 , 11));
console.log(logg.substr(6 , 5));
 // вторым аргументом указывается не индекс конца,а длина

 const num = 15.2;
 console.log(Math.round(num));

 const test = "12.2px";

 console.log(parseInt(test));
 console.log(parseFloat(test));