import React from 'react';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';
import modalStyle from '../styles/modal.css';

const DeleteComponent = ({ onRemoveNote, obj }) => (
  <div >
    <h5>Are you sure you want to delete this note?</h5>
    <Button s={6} className={modalStyle['delete-modal']} value={obj.id} onClick={onRemoveNote}>Delete</Button>
    <Button s={6} className={modalStyle['cancel-btn']} onClick={() => { $('#deletemodal').modal('close'); }} >Cancel</Button>
  </div>
);

DeleteComponent.propTypes = {
  onRemoveNote: PropTypes.func.isRequired,
  obj: PropTypes.func.isRequired,
};

export default DeleteComponent;

