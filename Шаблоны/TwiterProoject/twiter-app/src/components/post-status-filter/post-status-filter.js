import React, {Component} from 'react';

import "./post-status-filter.css"
import { Button } from 'reactstrap';

export default class PostStausFilter extends Component{

    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all' , lable: 'все'},
            {name: 'like' , lable: 'понравилось'}

        ];
    }

    render(){

        const buttons = this.buttons.map(({name,lable}) => {

            const active = this.props.filter === name;

            const clazz = active ? 'btn-info' : 'btn-outline-secondary';

            return(
                <button 
                    key={name} 
                    type="button" 
                    className={`btn  ${clazz}`}
                    onClick = {() =>this.props.onFilterSelect(name)}
                    >{lable}</button>
            ); 
        });

        return(
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

