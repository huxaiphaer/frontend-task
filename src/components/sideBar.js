import React from 'react';
import { Button, Input, Modal, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import '../styles/sidebar.scss';
import DeleteComponent from './deleteComponent';

const SideBar = ({
  notesData, onEditNote,
  onRemoveNote, obj,
  handleChange, openEditModalHandler,
  openDeleteModalHandler,
}) => (
  <div>
    <div className="sidebar-size "> <b>List of Notes </b></div>
    <ul className="collection">

      {notesData.map(note =>
        (<li className="collection-item avatar" key={note.id} >
          <i className="material-icons circle">folder</i>
          <span className="title">{note.title}</span>
          <div className="secondary-content row">
            <a
              className="material-icons col s1"
              onClick={() => openEditModalHandler(note.id)}
            >
              <i className="material-icons">edit</i>
            </a>
            <a className="material-icons col s1" onClick={() => { openDeleteModalHandler(note.id); }}>
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>))}
    </ul>
    <Modal
      id="deletemodal"
      header=""
    >
      <DeleteComponent
        onRemoveNote={onRemoveNote}
        obj={obj}
      />
    </Modal>
    <Modal
      id="editmodal"
      header="Edit a Note"
    >
      <Row>
        <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
        <Input label="Body" s={12} value={obj.body} name="body" onChange={handleChange} />
        <Button waves="light" s={12} value={obj.id} onClick={onEditNote}>Edit a Note</Button>
      </Row>
    </Modal>
  </div>
);

SideBar.propTypes = {
  notesData: PropTypes.arrayOf().isRequired,
  handleChange: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
  openEditModalHandler: PropTypes.func.isRequired,
  openDeleteModalHandler: PropTypes.func.isRequired,
  obj: PropTypes.arrayOf.isRequired,
};

export default SideBar;
