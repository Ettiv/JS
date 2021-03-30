import {createStore} from 'redux';



const reduser = (state = 0, action ) => {   
    switch (action.type) {
        case 'INK': 
            return state + 1;
        case 'DEC': 
            return state - 1;
        case 'RND':
            return state + action.value;
        default:
            return state;
    }
}

const ink = () =>({type:'INK' });//функия action creator(созадёт действие)


let store = createStore(reduser);//создаёт стор с редьюсером
console.log(store.getState());//достаёт стейт из стора

document.getElementById('ink').addEventListener('click', () => {
    store.dispatch(ink()/*использование action crateror  */);//вызывает нужный редьюсер в сторе
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch({type:'DEC'});
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch({type:'RND', value});//напрямую зависимлсть в редьюсер запихивать нельзя - она должна быть чистой. поэтому передаём значение
});

const update = () =>{
    document.getElementById('counter').textContent = store.getState();
}


store.subscribe(update);//вызывает колюэк при каждом обрпщении к стору
