import { shallow } from 'enzyme/build';
import React from 'react';
import DisplayNote from '../components/displayNote';

describe('delete component', () => {
  it('should render delete component', () => {
    shallow(<DisplayNote
      body=""
      handleChange={jest.fn()}
      title=""
    />);
  });
});
