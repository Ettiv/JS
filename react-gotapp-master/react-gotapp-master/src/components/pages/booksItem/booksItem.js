import React, { Component } from 'react';
import GotService from "../../../services/gotService";
import ItemDetails, {Field} from '../../itemDetails/itemDetails';


export default class BooksItem extends Component{
    gotService = new GotService();

    render(){
        return(
            <ItemDetails itemId={this.props.bookId}
                         getItem={this.gotService.getBook}>
                <Field field='numberOfPages' lable = 'Number of pages'/>
                <Field field='publisher' lable = 'Publisher'/>
                <Field field='direleaseded' lable = 'Released'/>
            </ItemDetails>
        );
    }
}