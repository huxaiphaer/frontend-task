import { shallow } from 'enzyme/build';
import React from 'react';
import DisplayNote from '../components/displayNote';

describe('display note component', () => {
  it('should render display note component', () => {
    shallow(<DisplayNote/>);
  });
});
