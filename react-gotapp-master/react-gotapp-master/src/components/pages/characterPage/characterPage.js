import React, { Component } from 'react';
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMesage from '../../errorMesage';
import GotService from "../../../services/gotService";


export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false

    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
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

        const itemList = (
            <ItemList
                onItemSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacter}
                renderItem={(item) => `${item.name} (${item.gender})`} //рендер фунция. контролировать вывод
            />
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedChar}
                         getItem={this.gotService.getCharacter}>
                <Field field='gender' lable = 'Gender'/>
                <Field field='born' lable = 'Born'/>
                <Field field='died' lable = 'Died'/>
                <Field field='culture' lable = 'Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        );
    }
}