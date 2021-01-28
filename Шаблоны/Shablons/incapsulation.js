"use strict";

function User(name , age){
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`имя пользователя ${this.name}, возраст ${this.age}`);
    };

    this.getAge = function(){
        return userAge;
    };

    this.setAge = function(age){
        if(typeof  age === 'number' && age >0 && age <110){
            userAge = age;
        } else {
            console.log("Error");
        }
    };
}

const ivan = new User('Ivan' , 27);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());
ivan.setAge(40);

ivan.userAge = 30;

ivan.say();

class USer1{
    constructor(i){
        this._i = i; //свойства начинающиеся с нижнего подчёркивания - приватны(на словах )
    }
}