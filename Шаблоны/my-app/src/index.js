import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// const elem  =( 
// <div>
//     <h2>Hellow world</h2>
//     <input type="text" placeholder="Type here" />
//     <button></button>
// </div>
// )



const Header = () => {
  const scr = '<skript>alert("error")</skript>'; //нельзя вставить вредоносный код,реакт об этом позаботился
  return <h2>{scr}</h2>;
}

const Field = () => {
  const holder = "Enter here";
  const styleFiels = {
    width: '300px'
  }
  return <input 
  style = {styleFiels}
  type="text" 
  placeholder={holder}
  autoComplete=""
  className="first" //вместо class
  htmlFor="" //вместо For?
   />
}

const Btn = () => {
  const text = "Log in";
  const res = ()=>{
    return "Log in,please"
  }
  const logged = true;
  return <button>{logged ? null : res()}</button> //можно помещать и элементы
}

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
