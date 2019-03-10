import { shallow } from 'enzyme/build';
import React from 'react';
import $ from 'jquery';
import DeleteComponent from '../components/deleteComponent';


describe('delete component', () => {
  let wrapper;
  it('should render delete component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<DeleteComponent
      obj=""
      onRemoveNote={jest.fn()}
    />);
    $.fn.modal = jest.fn();
    wrapper.find('Button').at(1).simulate('click');
  });
});
