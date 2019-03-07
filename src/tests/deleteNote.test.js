import { shallow } from 'enzyme/build';
import React from 'react';
import $ from 'jquery';
import DeleteComponent from '../components/deleteComponent';



describe('delete component', () => {
  let wrapper;
  it('should render delete component', () => {
    wrapper = shallow(<DeleteComponent
      obj={jest.fn()}
      onRemoveNote={jest.fn()}
    />);
    $.fn.modal = jest.fn();
    wrapper.find('Button').at(1).simulate('click');

  });
});
