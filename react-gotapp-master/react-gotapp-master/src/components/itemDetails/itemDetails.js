import React, { Component } from 'react';
import './itemDetails.css';

import GotService from "../../services/gotService";

const Field = ({ item, field, lable }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{lable}</span>
            <span>{item[field]}</span>
            {/* из объекста item вытащим field */}
        </li>
    );
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) { // вызывается при апдейте компонента. принимает либо предидущие пропсы либо предидущие стейт
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId } = this.props;

        if (!itemId) {
            return;
        }

        this.props.getItem(itemId)
            .then((item) => {
                this.setState({ item });
            });
    }

    render() {

        if (!this.state.item) {
            return (
                <span className='select-error'>Please selecte character</span>
            );
        }
        const { item } = this.state;
        const { name } = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                            // создаёт клона,так как элементы напрямую не меняются
                        })
                    }
                    {/* поместит все компоненты выданых выше */}
                </ul>
            </div>
        );
    }
}