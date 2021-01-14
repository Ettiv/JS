const log = function(a , b , ...c){ //... - рест оператор,записывается последним
    console.console.log(a , b , c);
}

log('1' , '2' , '3' , '4');

function calcODouble (number , basis = 2){ //по умолчанию присваеваем в basis 2
    console.log(number*basis);
}

calcODouble(3 , 5);
calcODouble(3);