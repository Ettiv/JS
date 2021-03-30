import React, { Component } from 'react';
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import ErrorMesage from '../../errorMesage';
import GotService from "../../../services/gotService";


export default class BookPage extends Component {

    gotService = new GotService();

    state = {
        selectedHouse: 1,
        error: false

    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                onItemSelected={this.onHouseSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}`} //рендер фунция. контролировать вывод
            />
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedHouse}
                         getItem={this.gotService.getHouse}>
                <Field field='name' lable = 'Name'/>
                <Field field='region' lable = 'Region'/>
                <Field field='coatOfArms' lable = 'Coat of arms'/>
                <Field field='words' lable = 'Words'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        );
    }
}