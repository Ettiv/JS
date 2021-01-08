'use strict';

document.addEventListener('DOMContentLoaded' , () => { // позволяет строить дом структуру сразу для отлова тегов
    //Tabs
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    document.querySelector('.promo__adv').remove();
    document.querySelector('.promo__genre').textContent = 'драмма';
    document.querySelector('.promo__bg').style.background = 'url("img/bg.jpg") center center/cover no-repeat';
    const films = document.querySelector('.promo__interactive-list');
    const deleteFilm = function(){
        const watcedFilms = document.querySelectorAll('.promo__interactive-item');
    
        watcedFilms.forEach((item, i) =>{
            item.querySelector('.delete').addEventListener('click', ()=>{
                //movieDB.movies.splice(i , i);
                delete movieDB.movies[i];
                filmsWriting();
            });
        });
    };    
    
    const filmsWriting = function(){
        movieDB.movies.sort();
        films.innerHTML = "";
        movieDB.movies.forEach((item, i) => {
            films.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
                            <div class="delete"></div>
            </li>
            `;
        });
        deleteFilm();
    };
    filmsWriting();
    const btn = document.querySelector('.promo__interactive').querySelector('button');


//     deleteFilm();
    
    btn.addEventListener('click', (event) => {
            event.preventDefault();  
            let a = document.querySelector('.adding__input').value;
            if( a == "" || a == null ){
                
            } else if(a.length > 21){
                a = a.slice(0,20) + '...';
                movieDB.movies.push(a);
                if (document.querySelector('.yes').previousElementSibling == true){
                    console.log(`Филм ${a} добавлен в избранное`);
                }
                filmsWriting();
            } else {
                movieDB.movies.push(a);
                 if (document.querySelector('.yes').previousElementSibling.checked == true){ // можно искать через тип querySelector([type = "checkBox"])
                    console.log(`Филм ${a} добавлен в избранное`);
                }
                filmsWriting(); 
            }
    });
    //Timer
    const deadLine = '2021-01-20';

    function getTimeRemaning(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 *24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) %  60),
        seconds = Math.floor((t / 1000) %  60);
        return {
            'total': t,
            'days' : days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock , 1000);
        function updateClock(){
            const t = getTimeRemaning(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <=0 ){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer' , deadLine);
});
