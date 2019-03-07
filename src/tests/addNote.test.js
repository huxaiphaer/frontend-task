import React from 'react';
import { shallow } from 'enzyme';
import AddNoteBtn from '../components/addNote';

describe('add button component', () => {
  it('should render add component', () => {
    shallow(<AddNoteBtn
      handleSubmit={jest.fn()}
      obj={jest.fn()}
      handleChange={jest.fn()}
    />);
  });
});
