import {getResourse} from "../services/services";

function cards() {
    //Меню рационов

    class OneMenuTabElemet {
        constructor(src, menuName, menuText, prise, alt, parentSelector, ...classes) {
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
        changeToUAH() {
            this.prise = this.prise * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
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

    getResourse('http://localhost:3000/menu').
        then (data =>{
            data.forEach(({img ,title ,descr ,price, altimg}) => {
                new OneMenuTabElemet(img , title , descr , price , altimg , ".menu .container").render();
            });
        }); 

    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({ img, title, descr, price, altimg }) => {
    //             new OneMenuTabElemet(img, title, descr, price, altimg, ".menu .container").render();
    //         });
    //     });
}

export default cards;