import { shallow } from 'enzyme/build';
import React from 'react';
import NavBar from '../components/navBar';

describe('navbar component', () => {
  it('should navbar component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    shallow(<NavBar />);
  });
});
