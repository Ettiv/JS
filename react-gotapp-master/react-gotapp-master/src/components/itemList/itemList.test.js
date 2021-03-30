import React from 'react';
import ItemList from './itemList';
import { mount } from 'enzyme';
import GotService from '../../services/gotService';

describe('Testing <ItemList/>', () => {
    const service = new GotService();
    const list = mount(<ItemList
                        getData={service.getAllHouses}
                        onItemSelected={({name})=>name}
                        renderItem={({name})=>name}/>
                )
    it('Clik on ItemList must rerender all list in 1 instance', () => {
        list.setState({ItemList: [{name: 'fsdfs', id: 1}, {name: 'fsdfs', id: 2}]});
        list.find('.list-group-item:first-child').simulate('click');
        expect(list.find('ul')).toHaveLength(1);
    });
});