"use strict";


let incr = 10,
    decr = 10;
//incr++;
//decr--;
console.log(incr++);
console.log(decr--);
console.log(++incr);
console.log(--decr);

console.log(2*2 == 4);
console.log(2*2 == `4`);
console.log(2*2 === `4`);

const isChecked = false,
      isClosed = false;

console.log(isChecked || !isClosed);