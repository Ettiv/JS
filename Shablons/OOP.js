"use strict";

const a = { };


const b = { };

b.__proto__ = a ; // Наследование с переопрелением
Object.setPrototypeOf(b , a ); // то же самое,но правильно

const peter = Object.create(a);// создаём объект peter прототип а 
