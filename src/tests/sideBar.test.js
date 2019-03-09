import { shallow } from 'enzyme/build';
import React from 'react';
import SideBar from '../components/sideBar';

describe('sideBar component', () => {
  let wrapper;
  it('should render sideBar component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<SideBar
      notesData={[{}]}
      onRemoveNote={jest.fn()}
      obj={jest.fn()}
      openEditModalHandler={jest.fn()}
      onDisplayAllNote={jest.fn()}
      openDeleteModalHandler={jest.fn()}
      handleChange={jest.fn()}
      onEditNote={jest.fn()}
    />);

    wrapper.find('li').at(0).simulate('click');
    wrapper.find('a').at(0).simulate('click');
    wrapper.find('a').at(1).simulate('click');
  });
});
