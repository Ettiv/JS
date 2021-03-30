import React, {useState, useEffect  } from 'react';
//import logo from 'logo.svg';
import './App.css';

function App(){
//хуки позаоляют делать внутреннее состояние без классовых компонентов. Функция возвращает массив
    const [count, setCount] = useState(0);//в скобкахх передаётся начальное состояние
    const [data, refreshData] = useState([{name:'Ivan' , sex: 'Male'}]);

    useEffect(()=>{ //выполняется при перересовке дом дерева(после первой отрисовки и после каждого последующего обновления компонента)
        console.log(Math.random());
        let timerId = setInterval(console.log('dfsfs', 15000));
        return () => { //иммитация componentWillUnmount(при удалении компонента)
            clearInterval(timerId); 
        }
    });
    
    return(
        <div>
            <p>
                вы кликнули {count} раз
            </p>
            <button onClick={() => setCount(count+1)}>Клик</button>
            <div>Name: {data[0].name}, sex: {data[0].sex}</div>
            {data.map(item => {
                return (
                    <div>Name: {item.name}, sex: {item.sex}</div>
                );
            })}
            <button onClick={() => refreshData(data => ([...data,/*иммутабельность*/ {name: 'Alex' , sex: 'Male'}]))}>
                Добавить данные
            </button>
        </div>
        
    );
}

export default App;