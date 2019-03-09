import React from 'react';
import { shallow } from 'enzyme';
import $ from 'jquery';
import App from '../containers/App';

describe('shallow render app dashboard', () => {
  let wrapper;

  beforeEach(() => {
    // eslint-disable-next-line react/jsx-filename-extension
    wrapper = shallow(<App />);
  });

  it('should handle Change for search view.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({ title: 'Huxy', body: 'hey' });
    wrapper.instance().onHandleChangeSearch({
      target: { search: 'Huxy'.toLowerCase() },
    });
  });

  it('should create a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: 'hey huxy this is great.' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('should not create a Note without body.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: '' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('should not create a Note without title.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: '', body: 'hey huxy this is great.' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('should not create a Note with long title.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'hey huxy this is great, and am in for the next week.', body: 'This is really true ' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('should remove a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().onRemoveNote({ target: { value: 0 } });
    wrapper.instance().setState({ body: '' });
  });

  it('should edit a Note.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().onEditNote({ target: { value: '0' } });

    wrapper.instance().setState({
      title: 'huxy',
      body: 'hey huxy this is great.',
      notesArray: [{ title: 'hey', body: 'its good', id: '0' }],
    });

    wrapper.instance().setState((state) => {
      state.notesArray.map((item) => {
        if (item.id === '0') {
          // eslint-disable-next-line no-param-reassign
          item.title = state.title;
          // eslint-disable-next-line no-param-reassign
          item.body = state.body;
        }
        return item;
      });
    });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('should not  edit a Note with no body', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'huxy', body: '' });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('should not  edit a Note with no title', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: '', body: 'hey huxy this is great.' });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('should not edit a Note with long title.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().setState({ title: 'hey huxy this is great, and am in for the next week.', body: 'This is really true ' });
    wrapper.instance().onEditNote({ target: { value: 0 } });
  });

  it('should not create a Note when body is missing.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({ body: '' });
    wrapper.instance().onHandleSubmit({ preventDefault: jest.fn() });
  });

  it('should handle Change.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().onHandleChange({
      target: {
        title: 'huxy',
        body: 'huxy is nice',
      },
    });
  });

  it('should open the delete modal.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().openDeleteModalHandler(0);
  });

  it('should open the edit modal.', () => {
    wrapper = shallow(<App />);
    $.fn.modal = jest.fn();
    wrapper.instance().openEditModalHandler(0, {});
  });

  it('should display all contents of a single  modal.', () => {
    wrapper = shallow(<App />);
    wrapper.instance().onDisplayAllNote({});
  });
});
