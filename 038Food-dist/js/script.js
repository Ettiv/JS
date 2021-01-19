"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show" , "fade");
        });
        tabs.forEach(tab =>{
            tab.classList.remove("tabheader__item_active");
        });

    }
    function showTabContent(i = 0){ // 0 по умолчанию
         tabsContent[i].classList.add("show" , "fade");
         tabsContent[i].classList.remove("hide");
         tabs[i].classList.add('tabheader__item_active');
    }
    tabsParent.addEventListener("click" , (event) => {
        const target = event.target;

        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((item , i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    hideTabContent();
    showTabContent(0);

    //Timer
    const deadLine = '2021-01-15';

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

    function getZero(num){
        if (num >= 0 && num <10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock , 1000);

              updateClock();

        function updateClock(){
            const t = getTimeRemaning(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <=0 ){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer' , deadLine);

    //modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'); 

    function openModal(){
            modal.classList.add("show");
            modal.classList.remove("hide");
            document.body.style.overflow = "hidden";
            clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener("click" , openModal);
    });



    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }



    modal.addEventListener ("click" , (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown' , (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')){
            closeModal(); 
        }
    });

    const modalTimerId = setTimeout(openModal , 50000);

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll' , showModalByScroll);
        }
    }
         
    window.addEventListener('scroll' , showModalByScroll);

    //Меню рационов

    class OneMenuTabElemet{
        constructor(src , menuName , menuText , prise , alt , parentSelector , ...classes){
            this.src = src;
            this.menuName = menuName;
            this.menuText = menuText;
            this.prise = prise;
            this.alt = alt;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH(){
            this.prise = this.prise * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else{
                this.classes.forEach(className => element.classList.add(className));
            }

           
            element.innerHTML = `
            
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">Меню "${this.menuName}"</h3>
            <div class="menu__item-descr">${this.menuText}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
            </div>`;
            this.parent.append(element);
        }
        
    }

    
    

    new OneMenuTabElemet("img/tabs/vegy.jpg" ,
        "Фитнес" , 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!' , 
        9 , 
        "vegy" ,
        ".menu .container",
        'menu__item' ,
        'big').render();
    new OneMenuTabElemet("img/tabs/elite.jpg" , 
        "Премиум" , 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!' , 
        14,
        "elite" ,
        ".menu .container"
        ).render();
    new OneMenuTabElemet("img/tabs/post.jpg" , 
        "Постное" , 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        21,
        "post" , 
        ".menu .container",
        'menu__item').render();

        //forms

        const forms = document.querySelectorAll('form');

        const message = {
            loading:'img/form/spinner.svg' ,
            sucsess: "Спасибо,скоро мы с вами свяжемся" ,
            failure: "Что-то пошло не так"
        };

        forms.forEach(item => {
            postData(item);
        });

        function postData(form){
            form.addEventListener("submit" , (event) => {
                event.preventDefault();

                const statusMesage = document.createElement('img');
                statusMesage.src = message.loading;
                statusMesage.style.cssText= `
                display:block;
                margin: 0 auto; 
                `;
                form.insertAdjacentElement('afterend' , statusMesage);

                

                // const request = new XMLHttpRequest();
                // request.open('POST' , 'server.php');
                //request.setRequestHeader('Content-type' , 'multipart/form-data');
                //Когда идёт связка XMLHttpRequest и FormData нам заголовок устанавливать НЕ НУЖНО(НЕЛЬЗЯ)

                const formData = new FormData(form); //создаём формДату(альтернатива JSON)

                const object = {};
                formData.forEach(function(value,key){
                    object[key] = value;
                });
                // request.send(formData);
                fetch('server.php' , {
                    method:"POST" ,
                    headers: {
                        'content-type' : 'aplication/json'
                    },
                    body: JSON.stringify(object)
                }).then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.sucsess);
                    form.reset();
                    statusMesage.remove();
                }).catch(()=>{   //не рабоатет с ошибками HTTP протокола
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

                // request.addEventListener("load" , () => {
                //     if (request.status === 200){
                //         console.log(request.response);
                //         showThanksModal(message.sucsess);
                //         form.reset();
                //         statusMesage.remove();
                //     } else {
                //         showThanksModal(message.failure);
                //     }
                // });
                
            });
        }
        function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            prevModalDialog.classList.remove('show');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close data-close">×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;

            document.querySelector(".modal").append(thanksModal);
            setTimeout(()=> {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();

            }, 4000);
        }

        // fetch('https://jsonplaceholder.typicode.com/posts' , {
        //     method: "POST",
        //     body: JSON.stringify({name:"Alex"}),                //Post
        //     headers:{
        //         'content-type' : 'aplication/json'
        //     }
        // })//объект настроек
        // .then(response => response.json())                       //Get 
        // .then(json => console.log(json));
}); 