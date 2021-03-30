import React from 'react';
import App from '../app/app';
import styled from "styled-components";

import "./app-header.css";

const Header = styled.div`
    display: flex
    align-items: flex-end;
    justify-content: space-between;
    h1 {                    //вложеный класс
        font-size: 26px;
        :hover {            //задание действия
            color: ${props => props.colored ? 'red' : 'black'};
        }
    } 
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return(
        <div className = "app-header d-flex">
            <h1>Виктор Груданов</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    );
}

export default AppHeader;