import React from 'react';
import { Button, Modal, Row } from 'react-materialize';
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
// eslint-disable-next-line react/jsx-filename-extension
  (<div>
    <div className="sidebar-size "> <h5 className={styles.header}>List of Notes </h5></div>
    { notesData.length !== 0 ? (<ul className="collection">
      {notesData.map(note =>

        (<li
          className={`collection-item avatar  ${styles.list}`}
          key={note.id}
          onClick={() => {
    onDisplayAllNote(note);
  }}
        >
          <div>
            <i className={`material-icons circle ${styles['icon-folder']}`}>folder</i>
          </div>
          <div>
            <span className={styles['list-title']}>{note.title}</span>
          </div>
          <div className={`secondary-content row  ${styles['align-edit-and-delete-icons']}`}>
            <a
              className={styles['edit-icon']}
              onClick={() => openEditModalHandler(note.id, note)}
            >
              <i className="material-icons">edit</i>
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <a
              className={styles['delete-icon']}
              onClick={() => {
        openDeleteModalHandler(note.id);
      }}
            >
              <i className="material-icons">delete</i>
            </a>
          </div>
          {/* eslint-disable-next-line react/jsx-closing-tag-location */}
        </li>))}
      {/* eslint-disable-next-line react/jsx-closing-tag-location */}
    </ul>)
      : <div><i>No notes available, please add one or more.</i></div>}
    <Modal
      id="deleteModal"
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
      id="editModal"
      header="Edit a Note"
    >
      <Row>
        <div className={modalStyle['auto-height-modal']}>
          <div className="input-field col s12">
            <input value={obj.title} id="title" name="title" type="text" onError={titleError} onChange={handleChange} />
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label className="active" htmlFor="title">Title</label>
          </div>
          <div className={modalStyle['error-message-title-and-body']}>{titleError}</div>
        </div>
        <div>
          <div className="input-field col s12">
            <textarea value={obj.body} id="body" name="body" type="text" onError={bodyError} className="materialize-textarea" onChange={handleChange} />
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label className="active" htmlFor="title">Body</label>
          </div>
          <div className={modalStyle['error-message-title-and-body']}>{bodyError}</div>
        </div>
        <Button waves="light" s={12} value={obj.id} className={`purple ${modalStyle['modal-button']}`} onClick={onEditNote}>Edit a Note</Button>
      </Row>
    </Modal>
    {/* eslint-disable-next-line react/jsx-closing-tag-location */}
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
