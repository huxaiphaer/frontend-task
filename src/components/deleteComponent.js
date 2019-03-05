import React from 'react';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';

const DeleteComponent = ({ onRemoveNoteId, onRemoveNote }) => (
  <div >
    <h5>Are you sure you want to delete this note?</h5>
    <Button waves="light" onClick={() => { onRemoveNote(onRemoveNoteId); }}>Delete</Button>
    <Button waves="light">Cancel</Button>
  </div>
);

DeleteComponent.propTypes = {
  onRemoveNoteId: PropTypes.string.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

export default DeleteComponent;

