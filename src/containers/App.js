import React, { Component } from 'react';

import NavBar from '../components/navBar';
import SideBar from '../components/sideBar';
import DisplayNote from '../components/displayNote';
import SearchView from '../components/search';
import AddNoteBtn from '../components/addNote';

class App extends Component {

    openModal=()=>{
        $('.modal1').modal();
    }

  render() {
    return (
	<div>
		<NavBar />
		<div className="s1">
			<SearchView />
		</div>
		<div>
			<AddNoteBtn />
		</div>
		<div className="row center-align">
			<div className="col s4">
				<SideBar />
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
