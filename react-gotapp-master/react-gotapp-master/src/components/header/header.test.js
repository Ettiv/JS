import React from 'react';
import Header from './header';
import {shallow} from 'enzyme';

describe('Testing <Header/>', () =>{
    it('Header render correct', () => {
        const char = shallow(<Header/>);
        expect(char).toMatchSnapshot();
    })
});