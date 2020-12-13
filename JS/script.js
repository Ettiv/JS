"use strict";


let numberOfFilms;

function start (){
    numberOfFilms  = +prompt("Сколько фильмов вы посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms  = +prompt("Сколько фильмов вы посмотрели?");
    }
}

function showMyDB (){
    if (personalMuvieDB.privat == false){
        console.log(personalMuvieDB);
    } else{
        console.log('не могу вывести приваиную информацию');
    }
}

function writeYourGenres (){
    for (let i =0; i< 3; i++){
        let d = i+1;
        personalMuvieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + d);

    }
}
start();

let personalMuvieDB = {
    count: numberOfFilms,
    movies: { 
       
    },
    actors: {},
    genres:[],
    privat:false
};



function rememberMyFilms(){
    let a , b;
    for (let i = 1; i < 3;i++){
    
        a = prompt("Один из последних просмотренных фильмов" , "" );
        b = prompt("Какую оцнку вы бы ему поставили?" , "");
        if (a == "" || b == "" || a == null || b == null ||  a.length > 50 || b.length > 50){
        i--;
        continue;
        }
    personalMuvieDB.movies[a] = b;
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if ( personalMuvieDB.count < 10){
        console.log("прсмотренно довольно мало фильмов");
    } else if (personalMuvieDB.count < 30) {
        console.log('вы классический зритель');
    } else { 
        console.log("вы киноман");
    }
}
writeYourGenres();
detectPersonalLevel();
showMyDB();




