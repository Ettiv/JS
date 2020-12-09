"use strict";


let numberOfFilms = prompt("Сколько фильмов вы посмотреои?");

let personalMuvieDB = {
    count: numberOfFilms,
    movies: { 
       
    },
    actors: {},
    genres:[],
    privat:false
};


const a = prompt("Один из последних просмотренных фильмов" , "" ),
      b = prompt("Какую оцнку вы бы ему поставили?" , ""),
      c = prompt("Один из последних просмотренных фильмов" , ""),
      d = prompt("Какую оцнку вы бы ему поставили?" , "");
personalMuvieDB.movies[a] = b;
personalMuvieDB.movies[c] = d;
console.log(personalMuvieDB);

