import { shallow } from 'enzyme/build';
import React from 'react';
import SideBar from '../components/sideBar';

describe('sideBar component', () => {
  it('should render sideBar component', () => {
    shallow(<SideBar
      notesData={[{}]}
      onRemoveNote={jest.fn()}
      obj={jest.fn()}
      openEditModalHandler={jest.fn()}
      onDisplayAllNote={jest.fn()}
      openDeleteModalHandler={jest.fn()}
      handleChange={jest.fn()}
      onEditNote={jest.fn()}
    />);
  });
});
