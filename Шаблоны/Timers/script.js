// "use strict";

// const timerId = setTimeout(function(){
//     console.log("hellow world");
// },2000);

// const timerIdOne = setTimeout(function(text){
//     console.log(text);
// },2000,"hellow world");

// function logger (){
//     console.log("hellow");
// }
// const timerIdTwo = setTimeout(logger,2000);

// clearInterval(timerId); // сбрасывает таймер

// const btn = document.querySelector(".btn");
// let timerIdThree, i = 0;
// btn.addEventListener("click" , () => {
//     timerIdThree = setInterval(stopAnim , 500); //звдвёт повторяющийся интервал. Отменяется так же
// });                                             //не ждёт выполнение функции и запускает следующую после интервала
//                                                 //следует использовать в этом случае рекурсивную функцию

// function stopAnim(){
//     if ( i === 3){
//         clearInterval(timerIdThree);
//     }
//     i++;
//     console.log(i);
// }
// let id = setTimeout(function log(){
//     console.log('bya');             //ждёт выполнения функции
//     id = setTimeout(log, 500);
// }, 500);

function myAnimations (){
    const elem = document.querySelector(".box");
    let pos = 0;
    const idOne = setInterval(frame, 10);
    function frame (){
        if(pos == 300){
            clearInterval(idOne);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
const btn = document.querySelector(".btn");
btn.addEventListener('click' , myAnimations);
