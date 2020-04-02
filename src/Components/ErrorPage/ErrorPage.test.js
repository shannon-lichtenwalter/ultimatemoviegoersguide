import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage';

describe('ErrorPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<ErrorPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 
});
