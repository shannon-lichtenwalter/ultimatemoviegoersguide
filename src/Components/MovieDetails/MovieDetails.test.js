import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieDetails from './MovieDetails';

describe('MovieDetails Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<BrowserRouter><MovieDetails /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 
});