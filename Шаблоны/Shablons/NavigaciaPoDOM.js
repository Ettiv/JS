"use strict";

console.log(document.body);
console.log(document.documentElement); // обращение ко всему HTML
console.log(document.body.childNodes); // дочерние УЗЛЫ в листе
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector('#current').parentNode.parentNode);//родительский нод
console.log(document.querySelector('[data-current="3"]').nextSibling);//cледующий
console.log(document.querySelector('[data-current="3"]').previousSibling);//предыдущий

//Есть аналоги 
// firstChild, lastChild, parentElement , nextElementSibling;