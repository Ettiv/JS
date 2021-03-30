import React, { Component } from 'react';
import './randomChar.css';

import GotService from "../../services/gotService";

import Spiner from '../spiner';
import ErrorMesage from '../errorMesage';

export default class RandomChar extends Component {
    
    gotService = new GotService();  

    constructor(){
        super();
        this.updateCharacter = this.updateCharacter.bind(this);
    }

    state = {
        char:{},
        loading: true
    }

    componentDidMount(){ //вызывается при создвнии компонента
        console.log('Mounting');
        this.updateCharacter(); //Лучше всего рвботать с сервером в маунте,чтобы не было ошибок
        //this.timerId = setInterval(this.updateCharacter, 1500);
    }
    
    componentWillUnmount(){
        console.log('Unmounting');// Вызывается при удалении компонента
        //clearInterval(this.timerId);
    }

    onCharLoaded = (char) =>{
        this.setState({
            char,
            loading:false,
            error: false
        });
    }

    onError = (err) =>{
        this.setState({
            error:true,
            loading: false
        })
    }

    updateCharacter() {
        const id = Math.floor(Math.random()*140+25);
        // const id = 131323123;

        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {

        console.log('Render');

        const { char , loading , error } = this.state;
        
        const spiner = loading ? <Spiner/> : null;
        const content = !(loading || error) ? <Vieu char = {char}/> : null;
        const errorMesage = error ? <ErrorMesage/> : null;

        return (
            <div className="random-block rounded">
                {spiner}
                {content}
                {errorMesage}
            </div>
        );
    }

}

const Vieu = ({char}) =>{
        const { name, gender, born, died, culture} = char;
        return(
            <>
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </>
        )
        
        
}
