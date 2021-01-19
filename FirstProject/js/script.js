'use strict';
let numberOfFilms;

const personalMuvieDB = {
    count: numberOfFilms,
    movies: { 
       
    },
    actors: {},
    genres:[],
    privat:true,
    rememberMyFilms:function(){ 
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
    },
    detectPersonalLevel:function(){
        if ( personalMuvieDB.count < 10){
            console.log("прсмотренно довольно мало фильмов");
        } else if (personalMuvieDB.count < 30) {
            console.log('вы классический зритель');
        } else { 
            console.log("вы киноман");
        }
    },
    start:function(){
        numberOfFilms  = +prompt("Сколько фильмов вы посмотрели?");
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms  = +prompt("Сколько фильмов вы посмотрели?");
        }
    },
    showMyDB:function(){
        if (personalMuvieDB.privat == false){
            console.log(personalMuvieDB);
        } else{
            console.log('не могу вывести приваиную информацию');
        }
    },
    writeYourGenres:function(){
        for (let i =0; i< 3; i++){
            let d = i+1;
            personalMuvieDB.genres[i] = prompt('Ваш любимый жанр под номером ' + d);
            if(personalMuvieDB.genres[i] == null || personalMuvieDB.genres[i] == ""){
                i--;
                continue;
            }
        }
        this.genres.forEach(function(item ,i){
            let t = i+1;
            console.log(`Любимый жанр ${t} - это ${item}`);
        });
    },
    toggleVisibleMyDb: function(){
        if (personalMuvieDB.privat == false){
            personalMuvieDB.privat = true;
        } else{
            personalMuvieDB.privat = false;
        }
    }
};
personalMuvieDB.start();

personalMuvieDB.toggleVisibleMyDb();

personalMuvieDB.rememberMyFilms();

personalMuvieDB.writeYourGenres();

personalMuvieDB.detectPersonalLevel();

personalMuvieDB.showMyDB();




