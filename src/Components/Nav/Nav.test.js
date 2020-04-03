import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Nav from './Nav';

describe('Nav Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><Nav /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the Nav component correctly when rendered', () => {
    const wrapper = mount(<BrowserRouter><Nav /></BrowserRouter>);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});