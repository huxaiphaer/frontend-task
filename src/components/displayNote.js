import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-materialize';
import cardStyle from '../styles/displayNote.css';


const DisplayNote = ({ body, handleChange, title }) => (
  <div>
    <h5 className={cardStyle.header}>Note</h5>
    { title !== '' ? (
      <Card className={cardStyle['card-style']}>
        <p className={cardStyle['title-text']} value={title} onChange={handleChange}>{title}</p>
        <p className={cardStyle['body-text']} value={body} onChange={handleChange}>{body}</p>
      </Card>
    )
      : <div className={cardStyle['no-selected-note']}><i>You haven&apos;t selected any note.</i></div>
    }
  </div>
);

DisplayNote.propTypes = {
  body: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,

};


export default DisplayNote;
