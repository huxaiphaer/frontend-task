import React from 'react';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';

const DeleteComponent = ({ onRemoveNote, obj }) => (
  <div >
    <h5>Are you sure you want to delete this note?</h5>
    <Button waves="light" value={obj.id} onClick={onRemoveNote}>Delete</Button>
    <Button waves="light" onClick={() => { $('#deletemodal').modal('close'); }} >Cancel</Button>
  </div>
);

DeleteComponent.propTypes = {
  onRemoveNote: PropTypes.func.isRequired,
  obj: PropTypes.arrayOf.isRequired,
};

export default DeleteComponent;

