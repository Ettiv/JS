"use strict";

function showThis(a , b){
    console.log(this);
    function summ(){
        console.log(summ);
        return a+b;
    }
    console.log(summ());
}

showThis(4 , 5);

const obj = {
    a: 20,
    b: 15,
    summ: function(){
        console.log(this);
    }
};

obj.summ();

function sayName(surname){
    console.log(this);
    console.log(this.name +" "+ surname);
}

const user = {
    name: "john"
};

sayName.call(user, 'smith');
sayName.apply(user, ['Smith']);

function count(num){
    return this*num;
}

const double = count.bind(2);//биндит this

console.log(double(3));

//1) Обычная функция: this = window, если use strict - undefind
//2) Контекст у методов обхекта - сам объект
//this в конструкторах и классах - это новй экземпляр обхекта
//4)ручная привязка this:call,apply,bind

const btn = document.querySelector('button');

btn.addEventListener('click' , function(){
    console.log(this);//образается к элементу, не работает со стрелочной функцией
});

const obj1 = {
    num: 5,
    sayNumber: function(){
        const say = ()=>{ // стрелочная функция не имеет контекста и ссылается на родительский объект
            console.log(this);
        };
        say();
    }
};
obj1.sayNumber();

const double1 = a => a*2;

console.log(double(4));