'use strict';

document.addEventListener('DOMContentLoaded' , () => { // позволяет строить дом структуру сразу для отлова тегов
    
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
    };
    filmsWriting();
    const btn = document.querySelector('.promo__interactive').querySelector('button');
    
    btn.addEventListener('click', (event) => {
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
    
});
