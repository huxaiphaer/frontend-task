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
  titleError,
  bodyError,
}) => (
  (<div>
    <div className="sidebar-size "> <h5 className={styles.header}>List of Notes </h5></div>
    <ul className="collection">

      {notesData.map(note =>
        (<li className={`collection-item avatar  ${styles.list}`} key={note.id} onClick={() => { onDisplayAllNote(note); }}>
          <i className={`material-icons circle ${styles['icon-folder']}`}>folder</i>
          <span className={styles['list-title']}>{note.title}</span>
          <div className="secondary-content row">
            <a
              className={styles['edit-icon']}
              onClick={() => openEditModalHandler(note.id, note)}
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
        <div>
          <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
          <div className={modalStyle['error-message-title-and-body']}>{titleError}</div>
        </div>
        <div>
          <Input label="Body" type="textarea" className="active" s={12} value={obj.body} name="body" onChange={handleChange} />
          <div className={modalStyle['error-message-title-and-body']}>{bodyError}</div>
        </div>
        <Button waves="light" s={12} value={obj.id} className={modalStyle['modal-button']} onClick={onEditNote}>Edit a Note</Button>
      </Row>
    </Modal>
  </div>)
);

SideBar.propTypes = {
  notesData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  onEditNote: PropTypes.func.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
  openEditModalHandler: PropTypes.func.isRequired,
  openDeleteModalHandler: PropTypes.func.isRequired,
  onDisplayAllNote: PropTypes.func.isRequired,
  obj: PropTypes.func.isRequired,
  titleError: PropTypes.string.isRequired,
  bodyError: PropTypes.string.isRequired,
};

export default SideBar;
