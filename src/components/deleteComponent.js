import React from 'react';
import { Button } from 'react-materialize';
import PropTypes from 'prop-types';
import modalStyle from '../styles/modal.css';

const DeleteComponent = ({ onRemoveNote, obj }) => (
// eslint-disable-next-line react/jsx-filename-extension
  <div >
    <h5>Are you sure you want to delete this note?</h5>
    <Button s={6} className="red darken-2" value={obj.id} onClick={onRemoveNote}>Delete</Button>

    <Button
      s={6}
      className={modalStyle['cancel-btn']}
      onClick={() => {
      // eslint-disable-next-line no-undef
      $('#deleteModal').modal('close');
    }}
    >Cancel
    </Button>
  </div>
);

DeleteComponent.propTypes = {
  onRemoveNote: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  obj: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default DeleteComponent;

