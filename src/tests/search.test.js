import { shallow } from 'enzyme/build';
import React from 'react';
import SearchView from '../components/search';

describe('search component', () => {
  it('should render search  component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    shallow(<SearchView handleChange={jest.fn()} />);
  });
});
