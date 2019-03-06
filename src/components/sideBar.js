import React from 'react';
import { Button, Input, Modal, Row } from 'react-materialize';
import PropTypes from 'prop-types';
import '../styles/sidebar.scss';
import DeleteComponent from './deleteComponent';


const SideBar = ({
  notesData, editNote, onRemoveNote, obj, handleChange,
}) => (
  <div>
    <div className="sidebar-size "> <b>List of Notes </b></div>
    <ul className="collection">

      {notesData.map((item, index) =>
        (<li className="collection-item avatar" key={item}>
          <i className="material-icons circle">folder</i>
          <span className="title">{item.title}</span>
          <div className="secondary-content row">
            <a className="material-icons col s1" onClick={() => { $('#editmodal').modal('open'); }}>
              <i className="material-icons">edit</i>
            </a>
            <a className="material-icons col s1" onClick={() => { onRemoveNote(index); }}>
              <i className="material-icons">delete</i>
            </a>
            <Modal
              id="editmodal"
              header={index}
            >
              <Row>
                <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
                <Input label="Body" s={12} value={obj.body} name="body" onChange={handleChange} />
                <Button waves="light" s={12} onClick={() => { editNote(index); }}>Edit a Note</Button>
              </Row>
            </Modal>

            <Modal
              id="deletemodal"
              header=""
            >
              <DeleteComponent
                onRemoveNote={onRemoveNote}
                onRemoveNoteId={index}
              />
            </Modal>
          </div>
        </li>))}

    </ul>
  </div>
);

SideBar.propTypes = {
  notesData: PropTypes.arrayOf.isRequired,
  editNote: PropTypes.func.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

export default SideBar;
