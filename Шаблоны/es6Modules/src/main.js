export let one = 1;

let two = 2;

export {two}; //сущность чего то экспортируется в скобках

export default function sayHi(){ //default - экспорт по умолчанию
    console.log("hello");
}