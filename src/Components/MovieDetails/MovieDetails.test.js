import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieDetails from './MovieDetails';

describe('MovieDetails Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><MovieDetails /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the MovieDetails component correctly when rendered', () => {
    const wrapper = mount(<BrowserRouter><MovieDetails /></BrowserRouter>);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});