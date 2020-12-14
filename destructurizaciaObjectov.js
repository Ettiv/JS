"use strict";

const option = {
    name: 'test' ,
    width: 1024 ,
    height: 1024 ,
    colors: {
        border: 'black',
        bg: 'red'
    } ,
    makeTest: function (){
        console.log('test');
    }

}; 

option.makeTest();

const {border , bg } = option.colors;
console.log(border);

console.log(Object.keys(option).length); // Лайфак

// console.log(option); 

// delete option.name;

// console.log(option);

// for (let key in option){
//     if (typeof(option[key]) === 'object'){
//         for (let i in option[key]){
//             console.log(`Свойство ${i} имеет значение: ${option[key][i]}`);
            
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение: ${option[key]}`);
       
//     }   
// }

