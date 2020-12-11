
"use strict";

if (4 == 9) {
    console.log('yes');
} else {
    console.log("no");
}

if (1){
  console.log("11");  
}

const g = 50;

if (g < 49){
    console.log("1");
} else if (g > 100) {
    console.log("2");

} else {
    console.log("3");
}

(g<51) ? console.log('ok') : console.log ('not ok');

switch (g){
    case 49: 
        console.log("d");
        break;
    case 50 : 
        console.log("n");
        break;
    default : console.log("3");
}