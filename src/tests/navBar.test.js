import { shallow } from 'enzyme/build';
import React from 'react';
import NavBar from '../components/navBar';

describe('navbar component', () => {
  it('should navbar component', () => {
    shallow(<NavBar />);
  });
});
