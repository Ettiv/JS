"use strict";

const persone = {
    name: "Alex",
    age: 25,

    get userAge(){
        return this.age;
    },

    set UserAge(num){
        this.age = num;
    }
};

console.log(persone.userAge); //вызывая геттер не ставим скобки
console.log(persone.userAge = 30);
console.log(persone.userAge);