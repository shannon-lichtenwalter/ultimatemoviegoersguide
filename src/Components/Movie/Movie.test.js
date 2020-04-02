import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';

describe('Movie Component', () => {
  const testData = {
    id: '123',
    poster_path: '/test',
    title: 'test'
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<Movie data={testData}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 
});
