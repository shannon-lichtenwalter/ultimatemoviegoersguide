import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('ErrorPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<ErrorPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the ErrorPage correctly when rendered', () => {
    const wrapper = mount(<ErrorPage />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});
