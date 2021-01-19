"use strict";

//filtr

const names = ['ivan' , 'anna' , 'ksenia' , 'voldemart'];

const shortNames = names.filter(function(name){ //создаёт новый массив. Должен возвращать занчения
    return name.length < 5;
});

console.log(shortNames);

//map

const answers =['iVAn', 'AnnA' , 'Hello'];

const result = answers.map(item => item.toLowerCase());
console.log(result);

// every / some

const some = [4 , "sdfdg" , "asdfa"];

console.log(some.some(item => typeof(item) === 'number')); //Возвращает true если хотябы один елемент подъодит

console.log(some.every(item => typeof(item) === 'number')); //Если каждый едемент

//reduse

const arr = [4,5,1,3,2,6];
                  //0(сумма)  //текущи элемент 
const res = arr.reduce((sum , current)=>{ //схлопывает массив
    sum + current;
} ,3); //Начальное значение(по умолчанию - 0)

const obj = { 
    ivan: 'persone' ,
    ann:'persone' ,
    dog: 'animal' ,
    cat: 'animal'
};

const newArr = Object.entries(obj) //создаёт матрицу(двууровневый массив)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);