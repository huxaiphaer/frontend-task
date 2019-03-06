/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';

import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';
import DisplayNote from '../components/displayNote';
import SearchView from '../components/search';
import AddNoteBtn from '../components/addNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArray: [],
      id: 0,
      title: '',
      body: '',
      search: '',
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('items')) || [];
    console.log('current data', data);
    this.setState({ notesArray: data });
  }

    onRemoveNote = (id) => {
      console.log('id ', id);
      this.setState((state) => {
        const listNotes = state.notesArray.filter((item, j) => id !== j);
        localStorage.setItem('items', JSON.stringify(listNotes));
        window.location.reload();

        return {
          listNotes,
          title: '',
          body: '',
        };
      });
    };

    onEditNote =(id) => {
      console.log('id->', id);
      // this.setState((state) => {
      //   // const listNotes = state.notesArray.filter(note => note.id !== id);
      //   const list = state.notesArray.map((item, j) => {
      //     console.log(' title-> ', item.title);
      //
      //     if (j === id) {
      //       item.title = 'Bad day man';
      //       item.body = 'Why ? ';
      //     }
      //     return item;
      //   });
      //
      //   localStorage.setItem('items', JSON.stringify(list));
      //
      //
      //   return {
      //     list,
      //   };
      // });
    }

    onHandleSubmit=(event) => {
      event.preventDefault();

      const obj = {
        title: this.state.title,
        body: this.state.body,
        id: this.state.id,
      };

      this.setState((state) => {
        const notesArray = [...state.notesArray, obj];
        console.log('mmmm', notesArray);
        localStorage.setItem('items', JSON.stringify(notesArray));
        return {
          notesArray,
          id: Math.floor(Math.random() * 500),
          title: '',
          body: '',
        };
      });
      console.log('our state', this.state.notesArray);
    }

    onHandleChange(evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }

    onHandleChangeSearch = (e) => {
      this.setState({ search: e.target.value });
    }


    render() {
      const { notesArray, search } = this.state;
      const filteredNotes = notesArray.filter(note =>
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);

      return (
        <div>
          <NavBar />
          <div className="s1">
            <SearchView
              handleChange={this.onHandleChangeSearch}
            />
          </div>
          <div>
            <AddNoteBtn
              handleSubmit={this.onHandleSubmit}
              handleChange={this.onHandleChange}
              obj={this.state}
            />
          </div>
          <div className="row center-align">
            <div className="col s4">
              <SideBar
                notesData={filteredNotes}
                editNote={this.onEditNote}
                onRemoveNote={this.onRemoveNote}
                search={search}
                obj={this.state}
                handleChange={this.onHandleChange}
              />
            </div>
            <div className="col s7">
              <DisplayNote />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
