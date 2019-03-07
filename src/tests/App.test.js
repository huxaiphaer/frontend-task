import React from 'react';
import App from '../containers/App';
import $ from 'jquery';
import { mount, shallow } from 'enzyme';

describe('shallow render app dashboard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('it should handle Change for search view.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({ title: 'Huxy', body: 'hey' });
    wrapper.instance().onHandleChangeSearch({
      target: { search: 'Huxy'.toLowerCase() },
    });
  });

  it('it should create a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: 'hey huxy this is great.' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('it should not create a Note without body.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: '' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('it should not create a Note without title.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: '', body: 'hey huxy this is great.' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('it should remove a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().onRemoveNote({ target: { value: 0 } });
    wrapper.instance().setState({ body: '' });
  });

  it('it should edit a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    const obj = {
      title: 'hey there',
      body: 'This is fantastic',
    };
    wrapper.instance().setState({
      title: 'huxy',
      body: 'hey huxy this is great.',
      notesArray: [{ title: 'hey', body: 'its good', id: '01' }],
    });
    wrapper.instance().setState({ title: obj.title, body: obj.body });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('it should not  edit a Note with no body', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: '' });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('it should not  edit a Note with no title', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: '', body: 'hey huxy this is great.' });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('it should not create a Note when body is missing.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({ body: '' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('it should handle Change.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().onHandleChange({
      target: {
        title: 'huxy',
        body: 'huxy is nice',
      },
    });
  });

  it('it should open the delete modal.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().openDeleteModalHandler(0);
  });

  it('it should open the edit modal.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().openEditModalHandler(0, {});
  });

  it('it should display all contents of a single  modal.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().onDisplayAllNote({});
  });
});
