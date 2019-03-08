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
// eslint-disable-next-line react/jsx-filename-extension
  <div>
    <Modal
      id="addModal"
      header="Add a Note"
      className={modalStyles['edit-and-add-modal-']}
      trigger={<Button floating large className={`purple darken-4 ${styles['add-Button']}`} icon="add" />}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <div>
            <div>
              <Input label="Title" s={12} value={obj.title} error={titleError} name="title" onChange={handleChange} />
              <div className={modalStyles['error-message-title-and-body']}>{titleError}</div>
            </div>
            <div>
              <Input label="Body" type="textarea" s={12} value={obj.body} error={bodyError} name="body" onChange={handleChange} />
              <div className={modalStyles['error-message-title-and-body']} >{bodyError}</div>
            </div>
            <div>
              <Button waves="light" s={12} className={`purple ${modalStyles['modal-button']}`}>Create a Note</Button>
            </div>
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
