import { shallow } from 'enzyme/build';
import React from 'react';
import SearchView from '../components/search';

describe('search component', () => {
  it('should render search  component', () => {
    shallow(<SearchView handleChange={jest.fn()} />);
  });
});
