import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AboutPage from './AboutPage';

describe('AboutPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
      (<AboutPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }); 

  it('Displays the AboutPage when rendered', () => {
    const wrapper = mount(<AboutPage />);
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});


