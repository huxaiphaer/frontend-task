/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';
import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';
import DisplayNote from '../components/displayNote';
import SearchView from '../components/search';
import AddNoteBtn from '../components/addNote';
import styles from '../styles/search.css';
import align from '../styles/alignAllComponents.css';


class App extends Component {
  constructor(props) {
    super(props, props, props);
    this.state = {
      notesArray: [],
      id: '',
      title: '',
      body: '',
      search: '',
      titleDisplay: '',
      bodyDisplay: '',
      titleError: '',
      bodyError: '',
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('items')) || [];
    this.setState({ notesArray: data });
  }

    onRemoveNote = (event) => {
      const { target: { value: id } } = event;
      this.setState((state) => {
        const listNotes = state.notesArray.filter(item => id !== item.id);
        localStorage.setItem('items', JSON.stringify(listNotes));
        // eslint-disable-next-line no-undef
        this.setState({ notesArray: listNotes });
        return {
          listNotes,
          title: '',
          body: '',
        };
      });
      this.onDeleteToast('Note deleted successfully.');
      // eslint-disable-next-line no-undef
      $('#deleteModal').modal('close');
    };

  onDisplayAllNote =(note) => {
    this.setState({ titleDisplay: note.title, bodyDisplay: note.body });
  };

    onEditNote = (event) => {
      const { target: { value: id } } = event;
      const obj = {
        title: this.state.title,
        body: this.state.body,
      };

      // clear the errors while submitting

      this.setState({ titleError: '', bodyError: '' });

      if (obj.title === '') {
        this.setState({ titleError: 'Title empty, please add title' });
      } else if (obj.body === '') {
        this.setState({ bodyError: 'Body empty, please add body' });
      } else if (obj.title.length > 20) {
        this.setState({ titleError: 'Title is too long.' });
      } else {
        this.setState((state) => {
          const list = state.notesArray.map((item) => {
            if (item.id === id) {
              // eslint-disable-next-line no-param-reassign
              item.title = obj.title;
              // eslint-disable-next-line no-param-reassign
              item.body = obj.body;
            }
            return item;
          });

          localStorage.setItem('items', JSON.stringify(list));

          // eslint-disable-next-line no-undef
          $('#editModal').modal('close');
          this.onSuccessToast('Note edited successfully.');
          return {
            list,
            title: '',
            body: '',

          };
        });
      }
    };

    onSuccessToast=(message) => {
      toast.success(message, {
        className: css({
          background: 'purple',
        }),
        bodyClassName: css({
          fontSize: '13px',
        }),
        progressClassName: css({
          background: 'repeating-radial-gradient(circle at center, white 0, blue, red 30px)',
        }),
      });
    };

    onDeleteToast=(message) => {
      toast.error(message);
    };

    onHandleSubmit=(event) => {
      event.preventDefault();

      // clear the errors while submitting
      this.setState({ titleError: '', bodyError: '' });

      const obj = {
        title: this.state.title,
        body: this.state.body,
        id: this.formatDateForDatabase(),
      };

      if (obj.title === '') {
        this.setState({ titleError: 'Title empty, please add title' });
      } else if (obj.body === '') {
        this.setState({ bodyError: 'Body empty, please add body' });
      } else if (obj.title.length > 20) {
        this.setState({ titleError: 'Title is too long' });
      } else {
        this.setState((state) => {
          const notesArray = [...state.notesArray, obj];
          localStorage.setItem('items', JSON.stringify(notesArray));
          return {
            notesArray,
            title: '',
            body: '',
            titleError: '',
            bodyError: '',
          };
        });

        // eslint-disable-next-line no-undef
        $('#addModal').modal('close');
        this.onSuccessToast('Note created successfully.');
      }
    };

    onHandleChange(evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }

    onHandleChangeSearch = (e) => {
      this.setState({ search: e.target.value });
    };

    formatDateForDatabase =() => {
      const date = new Date().getTime();
      return moment(date).format('YYYYMMDDHHmmssSSS');
    };

    openEditModalHandler = (id, note) => {
      this.setState({ id });
      this.setState({ title: note.title, body: note.body });
      // eslint-disable-next-line no-undef
      $('#editModal').modal('open');
    };

    openDeleteModalHandler = (id) => {
      this.setState({ id });
      // eslint-disable-next-line no-undef
      $('#deleteModal').modal('open');
    };


    render() {
      const {
        notesArray,
        search,
        title,
        body,
        id,
        titleDisplay,
        bodyDisplay,
        titleError,
        bodyError,
      } = this.state;

      const filteredNotes = notesArray.filter(note =>
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return (
      // eslint-disable-next-line react/jsx-filename-extension
        <div>
          <div>
            <NavBar />
            <ToastContainer />
            <div className={align['align-components']}>
              <div className={styles['search-box']}>
                <SearchView
                  handleChange={this.onHandleChangeSearch}
                />
              </div>
              <div className="row center-align">
                <div className="col s4">
                  <SideBar
                    notesData={filteredNotes}
                    onEditNote={this.onEditNote}
                    onRemoveNote={this.onRemoveNote}
                    openEditModalHandler={this.openEditModalHandler}
                    openDeleteModalHandler={this.openDeleteModalHandler}
                    search={search}
                    titleError={titleError}
                    bodyError={bodyError}
                    obj={{ title, body, id }}
                    handleChange={this.onHandleChange}
                    onDisplayAllNote={this.onDisplayAllNote}
                  />
                </div>
                <div className="col s7">
                  <DisplayNote
                    title={titleDisplay}
                    body={bodyDisplay}
                    handleChange={this.onHandleChange}
                    onDisplayAllNote={this.onDisplayAllNote}
                  />
                </div>
              </div>
            </div>
            <div>
              <AddNoteBtn
                titleError={titleError}
                bodyError={bodyError}
                handleSubmit={this.onHandleSubmit}
                handleChange={this.onHandleChange}
                obj={this.state}
              />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
