/**
 * Created by Mitaka on 26-Nov-17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper).toMatchSnapshot();
});