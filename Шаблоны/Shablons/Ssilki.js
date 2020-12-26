"use strict";

const obh = {
    a: 5,
    b: 1
};

const copy = obh; // Ссылка на объект
function copy1(mainObj){
    let objCopy ={};

    for (let key in mainObj){
        objCopy[key] = mainObj[key]; // цакл,для создания поверхностных
                                    //копий объекта(только переменные перв.  ур.)
    }

    return objCopy;
}

const add = {
    d: 1,
    e: 20
};

Object.assign(obh, add); //Объединяет 2 объекта,создавая ПОВЕРХНОСТНУЮ копию
Object.assign({}, add);

const oldArray = [1 , 2 , 3];
const newArray = oldArray.slice(); // создание поверхностной копии масива

const a = [],
      b = [],
      c = [...a, ...b , 5 , 6];//... - оператор разворота(вытаскивает значения)
                               //так же работает и для объектов