"use strict";

const btn = document.querySelector("button");

// btn.onclick = function(){   //Почти не используется
//     alert('clic');
// };
let i = 0;
const deleteElement = ()=> {
    alert("click");
    i++;
    if(i == 1){
        btn.removeEventListener('click',deleteElement);
    }
};

btn.addEventListener('click', deleteElement);


// btn.addEventListener('click', ()=> {  //Можно назначать 2 действия, выполняемые в поряде очереди
//     alert("second click"); 
// });

btn.addEventListener('mouseenter', (event)=> { // при наведении мыши
    console.log("hover");                      // первый парамент передоваемый в колбэк функцию - 
    console.log(event);                        //объект evrnt,который содержит много всяких кординат и тому подобное    
    //event.target.remove();
}, {once: true});// можно передавать 3 параметр - опцию. НАпример Once позволяет ивент листенеру
                 // запуститься лишь раз

// Всплытие событий,это когда лисенер происходит сначала на вложеном элементе,потом на родителе
//(если у родителя он тоже есть). Чтобы в этом случае показывалось у Event'а правильный исодный элемент
//можно использовать не Event.target,а Event.currentTarget


const link = document.querySelector("a");

link.addEventListener( 'click' , (event) => {
    event.preventDefault();                 //Отменяет стандартные функции
    console.log(event.target);
});


