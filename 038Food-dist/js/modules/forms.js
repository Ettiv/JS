import {closeModal , openModal} from './modal';
import {postData} from "../services/services";

function forms(formSelector , modalTimerId) {
    //forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        sucsess: "Спасибо,скоро мы с вами свяжемся",
        failure: "Что-то пошло не так"
    };

    forms.forEach(item => {
        BindPostData(item);
    });

    function BindPostData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const statusMesage = document.createElement('img');
            statusMesage.src = message.loading;
            statusMesage.style.cssText = `
                 display:block;
                 margin: 0 auto; 
                 `;
            form.insertAdjacentElement('afterend', statusMesage);



            // const request = new XMLHttpRequest();
            // request.open('POST' , 'server.php');
            //request.setRequestHeader('Content-type' , 'multipart/form-data');
            //Когда идёт связка XMLHttpRequest и FormData нам заголовок устанавливать НЕ НУЖНО(НЕЛЬЗЯ)

            const formData = new FormData(form); //создаём формДату(альтернатива JSON)

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // request.send(formData);

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.sucsess);
                    statusMesage.remove();
                }).catch(() => {   //не рабоатет с ошибками HTTP протокола
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
        openModal('.modal' , modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
                 <div class="modal__content">
                     <div class="modal__close data-close">×</div>
                     <div class="modal__title">${message}</div>
                 </div>
             `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');

        }, 4000);
    }

    // fetch('https://jsonplaceholder.typicode.com/posts' , {
    //     method: "POST",
    //     body: JSON.stringify({name:"Alex"}),                //Post
    //     headers:{
    //         'content-type' : 'application/json'
    //     }
    // })//объект настроек
    // .then(response => response.json())                       //Get 
    // .then(json => console.log(json));
}

export default forms;