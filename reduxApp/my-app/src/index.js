import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';



let store = createStore(reducer);//создаёт стор с редьюсером
console.log(store.getState());//достаёт стейт из стора

// const { ink, dec, rnd } = bindActionCreators(//возвращает объект с такими же ключами,какие мы передали
//     actions, dispatch
// );


ReactDOM.render(
    <Provider store={store}>
        {/* передаёт по иерархии ниже. любой компонент в провайдере будет иметь доступ к стор */}
        <App />
    </Provider>
    , document.getElementById('root')
);



