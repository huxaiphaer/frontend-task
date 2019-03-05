import React from 'react';
import PropTypes from 'prop-types';
import '../styles/sidebar.scss';

const SideBar = ({ notesData }) => (
  <div>
    <div className="sidebar-size "> <b>List of Notes </b></div>
    <ul className="collection">

      {notesData.map(notes =>
        (<li className="collection-item avatar" key={notes.id}>
          <i className="material-icons circle">folder</i>
          <span className="title">{notes.title}</span>
          <div className="row">
            <div className="col">
              <a href="#!" className="secondary-content  s6"><i className="material-icons">edit</i></a>
            </div>
          </div>
        </li>))}

    </ul>
  </div>
);

SideBar.propTypes = {
  notesData: PropTypes.array.isRequired,
};

export default SideBar;
