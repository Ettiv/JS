const now = new Date();//текущая
const now1 = new Date(0);// миллисекунд от 1970 года(учитывая пояса)
const now2 = new Date(-41412342142342342342); // отрицательное колличество миллисекунд - чтоубы уйти за 1970
const now3 = new Date(20 , 6 , 1, 2); //задаём в ручную
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());//день недели с воскресения
console.log(now.getHours());
console.log(now.getUTCHours()); // учитвывая UTC
console.log(now.getTimezoneOffset());// насколько отличие от главного пояса
console.log(now.getTime()); // колличество миллисекунд с 1970
//Всё тоже самое с set

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3; // возведение в степень
}

let end =new Date();

alert(`Цикл отработал за ${end - start}миллисекунд`);