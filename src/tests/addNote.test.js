import React from 'react';
import { shallow } from 'enzyme';
import AddNoteBtn from '../components/addNote';

describe('add button component', () => {
  it('should render add component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    shallow(<AddNoteBtn
      handleSubmit={jest.fn()}
      obj=""
      titleError=""
      bodyError=""
      handleChange={jest.fn()}
    />);
  });
});
