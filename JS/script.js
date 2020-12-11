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


// const a = prompt("Один из последних просмотренных фильмов" , "" ),
//       b = prompt("Какую оцнку вы бы ему поставили?" , ""),
//       c = prompt("Один из последних просмотренных фильмов" , ""),
//       d = prompt("Какую оцнку вы бы ему поставили?" , "");
// personalMuvieDB.movies[a] = b;
// personalMuvieDB.movies[c] = d;
let a , b;
// for (let i = 1; i < 3;i++){
    
//     a = prompt("Один из последних просмотренных фильмов" , "" );
//     b = prompt("Какую оцнку вы бы ему поставили?" , "");
//     if (a == "" || b == "" || a == null || b == null ||  a.length > 50 || b.length > 50){
//         i--;
//         continue;
//     }
//     personalMuvieDB.movies[a] = b;
// }
let t = 1;
// while (t < 3) {
//     t++;
//     a = prompt("Один из последних просмотренных фильмов" , "" );
//     b = prompt("Какую оцнку вы бы ему поставили?" , "");
//     if (a == "" || b == "" || a == null || b == null ||  a.length > 50 || b.length > 50){
//         t--;
//         continue;
//     }
//     personalMuvieDB.movies[a] = b;

// } 
do {
    t++;
    a = prompt("Один из последних просмотренных фильмов" , "" );
    b = prompt("Какую оцнку вы бы ему поставили?" , "");
    if (a == "" || b == "" || a == null || b == null ||  a.length > 50 || b.length > 50){
        t--;
        continue;
    }
    personalMuvieDB.movies[a] = b;
} while (t<3);
if ( personalMuvieDB.count < 10){
    console.log("прсмотренно довольно мало фильмов");
} else if (personalMuvieDB.count < 30) {
    console.log('вы классический зритель');
} else { 
    console.log("вы киноман");
}
console.log(personalMuvieDB);

