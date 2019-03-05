import React from 'react';
import '../styles/sidebar.scss';

const SideBar = () => (
  <div>
    <div className="sidebar-size "> <b>List of Notes </b></div>
    <ul className="collection">
      <li className="collection-item avatar">
        <i className="material-icons circle">folder</i>
        <span className="title">Title</span>
        <div className="row">
          <div className="col">
            <a href="#!" className="secondary-content  s6"><i className="material-icons">edit</i></a>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export default SideBar;
