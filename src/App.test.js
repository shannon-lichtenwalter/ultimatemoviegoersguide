import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the App component correctly when rendered', () => {
    const wrapper = mount(<BrowserRouter><App /></BrowserRouter>);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
