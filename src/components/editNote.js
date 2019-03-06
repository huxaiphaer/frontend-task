import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Row, Input } from 'react-materialize';

const EditNote = ({ handleSubmit, obj, handleChange }) => (
  <div>
    <Modal
      header="Edit a Note"
      trigger={<Button floating large className="red" icon="add" />}
    >
      <form onSubmit={handleSubmit}>
        <Row>
          <Input label="Title" s={12} value={obj.title} name="title" onChange={handleChange} />
          <Input label="Body" s={12} value={obj.body} name="body" onChange={handleChange} />
          <Button waves="light" s={12}>Create a Note</Button>
        </Row>
      </form>
    </Modal>
  </div>
);

EditNote.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  obj: PropTypes.arrayOf.isRequired,

};

export default EditNote;
