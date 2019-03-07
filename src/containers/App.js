/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import moment from 'moment';
import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';
import DisplayNote from '../components/displayNote';
import SearchView from '../components/search';
import AddNoteBtn from '../components/addNote';
import styles from '../styles/search.css';
import align from '../styles/alignAllComponents.css';
import landingPage from '../styles/landingPage.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
      id: '',
      title: '',
      body: '',
      search: '',
      titleDisplay: '',
      bodyDisplay: '',
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
        $('#deletemodal').modal('close');
        window.location.reload();

        return {
          listNotes,
          title: '',
          body: '',
        };
      });
    };

  onDisplayAllNote =() => {

  }

    onEditNote = (event) => {
      const { target: { value: id } } = event;
      const obj = {
        title: this.state.title,
        body: this.state.body,
      };
      this.setState((state) => {
        const list = state.notesArray.map((item) => {
          if (item.id === id) {
            item.title = obj.title;
            item.body = obj.body;
          }
          return item;
        });

        localStorage.setItem('items', JSON.stringify(list));

        $('#editmodal').modal('close');
        return {
          list,
          title: '',
          body: '',

        };
      });
    }

    onHandleSubmit=(event) => {
      event.preventDefault();

      const obj = {
        title: this.state.title,
        body: this.state.body,
        id: this.formatDateForDatabase(),
      };

      this.setState((state) => {
        const notesArray = [...state.notesArray, obj];
        localStorage.setItem('items', JSON.stringify(notesArray));
        return {
          notesArray,
          title: '',
          body: '',
        };
      });
    }

    onHandleChange(evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }

    onHandleChangeSearch = (e) => {
      this.setState({ search: e.target.value });
    }

    formatDateForDatabase =() => {
      const date = new Date().getTime();
      return moment(date).format('YYYYMMDDHHmmssSSS');
    }

    openEditModalHandler = (id) => {
      this.setState({ id });
      $('#editmodal').modal('open');
    };

    openDeleteModalHandler = (id) => {
      this.setState({ id });
      $('#deletemodal').modal('open');
    }


    render() {
      const {
        notesArray,
        search,
        title,
        body,
        id,
        titleDisplay,
        bodyDisplay,
      } = this.state;

      console.log('D title', titleDisplay);

      const filteredNotes = notesArray.filter(note =>
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return (
        <div>
          <div>
            <NavBar />
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
                    obj={{ title, body, id }}
                    handleChange={this.onHandleChange}
                    onDisplayAllNote={this.onDisplayAllNote}
                  />
                </div>
                <div className="col s7">
                  <DisplayNote
                    obj={{ titleDisplay, bodyDisplay }}
                    handleChange={this.onHandleChange}
                    onDisplayAllNote={this.onDisplayAllNote}
                  />
                </div>
              </div>
              <div>
                <AddNoteBtn
                  handleSubmit={this.onHandleSubmit}
                  handleChange={this.onHandleChange}
                  obj={this.state}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
