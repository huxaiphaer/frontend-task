import React from 'react';
import { Card } from 'react-materialize';
import cardStyle from '../styles/displayNote.css';

const DisplayNote = ({ body, handleChange,title }) => (
  <div>
    <h5 className={cardStyle.header}>Note</h5>
    <Card className={cardStyle['card-style']}>
      <p className={cardStyle['title-text']} value={title} onChange={handleChange}>{title}</p>
      <p className={cardStyle['body-text']} value={body} onChange={handleChange}>{body}</p>
    </Card>

  </div>
);


export default DisplayNote;
