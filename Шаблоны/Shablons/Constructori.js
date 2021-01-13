"use strict";

const num = new Number(3);

console.log(num);

function user(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`hello ${this.name}`);
    };
}

user.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл`);
};



const ivan = new user('Ivan' , 28);
const aleks = new user("Aleks" , 29);

ivan.exit();

ivan.hello();
aleks.hello();

console.log(ivan);
console.log(aleks);