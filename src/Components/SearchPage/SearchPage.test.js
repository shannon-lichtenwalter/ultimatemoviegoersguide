import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './SearchPage';

describe('SearchPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><SearchPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 
});