"use strict";

console.log('запрос данных...');

const req = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('подготовка данных...');
    
        const product ={
            name: 'TV',
            peice: 2000
        };
        
        resolve(product);
    } , 2000);
});


req.then((product)=>{ //Выпоняется в случае успеза(resolve)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            product.status = 'ordered';
            console.log(product);
            //reject(product); // перехватывается catch - реализация отлова ошибки
            resolve(product);
        } , 2000);

        
    }).then(data => {
        data.modify = true;
        return data;
    }).then((data) =>{
        console.log(data);
    }).catch(()=>{  //не рабоатет с ошибками HTTP протокола
        console.error('призошла ошибка');
    }).finally(() => { // выполняется при любом исходе промиса(например должны быть выплнены в любом случае. Вызывается последним.)
        console.log('finally');
    });
});

const test  = time =>{
    return new Promise(resolve =>{
        setTimeout(()=> resolve() , time);
    });
};

test(1000).then(()=> console.log('1000 ms'));
test(2000).then(()=> console.log('2000 ms'));

Promise.all([test(1000) , test(2000)]). then (() => { //выполняется,когда всё в массиве будет выполнено
    console.log('All');
});

Promise.race([test(1000) , test(2000)]). then (() => { //гонка. выполняется,когда выполнится быстрейший
    console.log('All');
});