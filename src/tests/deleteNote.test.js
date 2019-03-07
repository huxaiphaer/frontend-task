import { shallow } from 'enzyme/build';
import React from 'react';
import DeleteComponent from '../components/deleteComponent';

describe('delete component', () => {
  it('should render delete component', () => {
    shallow(<DeleteComponent
      obj={jest.fn()}
      onRemoveNote={jest.fn()}
    />);
  });
});
