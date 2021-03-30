import React, { Component } from 'react';
import ItemList from '../../itemList';
import ErrorMesage from '../../errorMesage';
import GotService from "../../../services/gotService";
import {withRouter} from 'react-router-dom';


class BookPage extends Component {

    gotService = new GotService();

    state = {
        error: false
    }

    componentDidCatch() {
        console.log('Error');

        this.setState({
            error: true
        });
    }

    render() {

        if (this.state.error) {
            return <ErrorMesage />
        }

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(`${itemId}`);  
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}`} //рендер фунция. контролировать вывод
            />
        );
    }
}

export default withRouter(BookPage);//оборачивает с рутором,предоставляя свойства