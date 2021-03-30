import React from 'react';

import './errorMesage.css'

const ErrorMesage = () =>{
    return (
        <>
            <img src = {process.env.PUBLIC_URL + '/img/error.jpg'} alt = 'Error'></img>
            <span>Something goes wrong</span>
        </>
    );
}

export default ErrorMesage;

