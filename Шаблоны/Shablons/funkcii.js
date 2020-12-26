"use strict";

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello world");

function calc (a , b){
    return (a + b);
}

console.log(calc(1 , 2));
console.log(calc(1 , 3));
console.log(calc(5 , 2));

const logger = function() {
    console.log("hellow")
};

logger();

const minus = (a , b) => a-b;
const t = a => {
    //код более двух строк
};