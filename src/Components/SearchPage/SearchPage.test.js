import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchPage from './SearchPage';

describe('SearchPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><SearchPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the SearchPage component correctly when rendered', () => {
    const wrapper = mount(<BrowserRouter><SearchPage /></BrowserRouter>);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});