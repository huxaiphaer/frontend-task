import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Input } from 'react-materialize';
import styles from '../styles/addButton.css';
import modalStyles from '../styles/modal.css';

const AddNoteBtn = ({
  handleSubmit,
  obj,
  handleChange,
  titleError,
  bodyError,
}) => (
  <div>
    <Modal
      id="addmodal"
      header="Add a Note"
      className={modalStyles['edit-and-add-modal-']}
      trigger={<Button floating large className={styles['add-Button']} icon="add" />}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <div>
            <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
            <div className={modalStyles['error-message-title-and-body']}>{titleError}</div>
          </div>
          <div>
            <Input label="Body" type="textarea" s={12} value={obj.body} name="body" onChange={handleChange} />
            <div className={modalStyles['error-message-title-and-body']} name={bodyError}>{bodyError}</div>
          </div>
          <div>
            <Button waves="light" s={12} className={modalStyles['modal-button']}>Create a Note</Button>
          </div>
        </Row>
      </form>
    </Modal>
  </div>
);

AddNoteBtn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  obj: PropTypes.func.isRequired,
  titleError: PropTypes.string.isRequired,
  bodyError: PropTypes.string.isRequired,
};

export default AddNoteBtn;
