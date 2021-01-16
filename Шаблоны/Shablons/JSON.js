"use strict";

const persone = {
    name: "alex",
    tel: "203232323",  
    parents: {
        mom: 'olga',
        dad: 'mike'
    }
};

console.log(JSON.stringify(persone)); // можно отправить на сервер(заворачивает в JSON)
console.log(JSON.parse(JSON.stringify(persone)));// разворачивает
const clone = JSON.parse(JSON.stringify(persone));//создание глубокого клона,который не связан с оригиналом

clone.parents.mom = 'ana';

console.log(persone);
console.log(clone);