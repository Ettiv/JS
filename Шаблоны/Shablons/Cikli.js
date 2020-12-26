"use strict";

let g = 50;

while (g < 55){
    console.log(g);
    g++;
}

let c = 50;
do {
   console.log(c);
   c++;
}
while (c<=55);

for(let i =1 ; i < 10; i++){
    if(i == 4 ){
        continue;
    }
        if(i == 8){
            break;
        }
    console.log(i);
}