"use strict";

import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculator";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
    modal('[data-modal]', '.modal', modalTimerId);
    timer(".timer", "2022-05-11");
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: ".offer__slider",
        nextArow: ".offer__slider-next",
        slide: ".offer__slide",
        prevArow: ".offer__slider-prev",
        totalCounter: '#total',
        wrapper: ".offer__slider-wrapper",
        currentCounter: '#current',
        field: ".offer__slider-inner"

    });
}); 