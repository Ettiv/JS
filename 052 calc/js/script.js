"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener( "input" , () => {
    const request  = new XMLHttpRequest();

    request.open('GET', 'js/current.json' /*путь к серверу */); // настройка
    request.setRequestHeader('Content-type', 'application/json; cvarset=utf-8'); // догастройка(указываем ,что и каких типов)
    request.send();//отправляем

    request.addEventListener('readystatechange' , () =>{
        if (request.readyState === 4/*все данные пришли */ && request.status === 200 ) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value("попробуйте позже"); 
        }
    });

    //свойства:
    //status - статус(например ошибка 404)
    //statusText - приписка к коду
    //responce - ответ от сервера
    //readyState - состояние операции запроса(loading,done и т.д.)
    //события:
    //readystatechange - при измиенении статуса
    //load - когда объект полностью загрузился

});//можно использовать событие change