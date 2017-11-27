/**
 * Created by Mitaka on 25-Nov-17.
 */
import React from 'react';
import {shallow} from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('render Header correctly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();

    // expect(wrapper.find('h1').text()).toBe('Header');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    //
    // // console.log(renderer.getRenderOutput());
    //
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});