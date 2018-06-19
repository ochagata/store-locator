import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', function() {
  let mountedApp;

  beforeEach(()=>{
    mountedApp = shallow(<App />);
  })

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a StoreLocator', () => {
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });
})
