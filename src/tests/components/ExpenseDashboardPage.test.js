/**
 * Created by Mitaka on 26-Nov-17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('render ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
});