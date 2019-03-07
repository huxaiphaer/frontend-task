import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Input } from 'react-materialize';
import styles from '../styles/addButton.css';
import modalStyles from '../styles/modal.css';

const AddNoteBtn = ({ handleSubmit, obj, handleChange }) => (
  <div>
    <Modal
      id="addmodal"
      header="Add a Note"
      className={modalStyles['edit-and-add-modal-']}
      trigger={<Button floating large className={styles['add-Button']} icon="add" />}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
          <Input label="Body" s={12} value={obj.body} name="body" onChange={handleChange} />
          <Button waves="light" s={12} className={modalStyles['modal-button']} onClick={() => { $('#addmodal').modal('close'); }}>Create a Note</Button>
        </Row>
      </form>
    </Modal>
  </div>
);

AddNoteBtn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  obj: PropTypes.func.isRequired,
};

export default AddNoteBtn;
