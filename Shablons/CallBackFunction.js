'use strict';

function first () {
    //код
    setTimeout(function(){
        console.log(1);
    } , 500);
}

function second () {
    console.log(2);
}

first();
second();

function learnJS (lang, callBack) {
    console.log(`Я учу: ${lang}`);
    callBack();
}
learnJS("java skript" , function(){
    console.log('Я прошёл этот урок'); 
});



