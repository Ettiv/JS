import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './itemList.css';

import Spiner from '../spiner';



function ItemList({ getData, onItemSelected, renderItem }) {

    const [itemList, updateList] = useState([]);

    // static defaultProps = {
    //     onItemSelected: 1500
    // }
    useEffect(() => {
        getData()
            .then((data) => {
                updateList(data);
            });
    },[]);//вторыйм аргументом можно передать с чем сравнивать стейт,чтобы тот не перерисовываося(рабоает только с примитивами)
          //пустой массив означает,что нужно выполнить функцию только при создании и исчезновении компонента
    function renderItems(arr) {
        return arr.map((item, i) => {

            //const {i} = item;
            const lable = renderItem(item);

            return (

                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => onItemSelected(i + 1)}
                >
                    {lable}
                </li>
            );
        });
    }

    if (!itemList) {
        return <Spiner />
    }

    const items = renderItems(itemList);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

}

// ItemList.defaultProps = {
//     onItemSelected: () => { }
// }//позволяет установить дефолтные значения для пропсов
// //можно задвать внутри компонента при промощи слова статик
// ItemList.propTypes = {
//     onItemSelected: (props, propName, componentName) => {
//         const value = props[propName];//ищем интервал внутри пропсов

//         if (typeof value === 'func' && !isNaN(value)) {
//             return null;
//         }
//         return new TypeError(`${componentName}:${propName} must br s function`)
//     }
// }//проверка на тип данных. ручной способ

// ItemList.propTypes = {
//     onItemSelected: PropTypes.func //всё тоже самое,что и выше,только библиотечный способо
//     //библиотека prop-types
//     //getData: PropTypes.arrayOf(PropTypes.object);
// }
export default ItemList;
