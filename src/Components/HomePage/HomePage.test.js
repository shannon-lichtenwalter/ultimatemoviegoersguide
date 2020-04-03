import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<HomePage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the HomePage correctly when rendered', () => {
    const wrapper = mount(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });

});
