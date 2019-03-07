import React from 'react';
import { Button, Input, Modal, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import DeleteComponent from './deleteComponent';
import styles from '../styles/sideNav.css';
import modalStyle from '../styles/modal.css';

const SideBar = ({
  notesData, onEditNote,
  onRemoveNote, obj,
  handleChange, openEditModalHandler,
  openDeleteModalHandler,
  onDisplayAllNote,
}) => (
  <div>
    <div className="sidebar-size "> <h5 className={styles.header}>List of Notes </h5></div>
    <ul className="collection">

      {notesData.map(note =>
        (<li className={`collection-item avatar  ${styles.list}`} key={note.id} onClick={() => { onDisplayAllNote(note); }}>
          <i className={`material-icons circle ${styles['icon-folder']}`}>folder</i>
          <span className={styles['list-title']}>{note.title}</span>
          <div className="secondary-content row">
            <a
              className={styles['edit-icon']}
              onClick={() => openEditModalHandler(note.id)}
            >
              <i className="material-icons">edit</i>
            </a>
            <a className={styles['delete-icon']} onClick={() => { openDeleteModalHandler(note.id); }}>
              <i className="material-icons">delete</i>
            </a>
          </div>
        </li>))}
    </ul>
    <Modal
      id="deletemodal"
      header=""
      className={modalStyle['delete-modal']}
    >
      <DeleteComponent
        onRemoveNote={onRemoveNote}
        obj={obj}
      />
    </Modal>
    <Modal
      className={modalStyle['edit-and-add-modal-']}
      id="editmodal"
      header="Edit a Note"
    >
      <Row>
        <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
        <Input label="Body" s={12} value={obj.body} name="body" onChange={handleChange} />
        <Button waves="light" s={12} value={obj.id} className={modalStyle['modal-button']} onClick={onEditNote}>Edit a Note</Button>
      </Row>
    </Modal>
  </div>
);

SideBar.propTypes = {
  notesData: PropTypes.arrayOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
  openEditModalHandler: PropTypes.func.isRequired,
  openDeleteModalHandler: PropTypes.func.isRequired,
  onDisplayAllNote: PropTypes.func.isRequired,
  obj: PropTypes.func.isRequired,
};

export default SideBar;
