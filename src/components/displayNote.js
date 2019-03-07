import React from 'react';
import { Card } from 'react-materialize';
import styles from '../styles/navbar.css';
import cardStyle from '../styles/displayNote.css';

const DisplayNote = ({ obj, handleChange }) => (
  <div>
      <h5 className={cardStyle.header}>Note</h5>
    <Card className={cardStyle['card-style']}>
      <p className={styles['body-text']}>body bhvghcg yfytfytfyt yfyfytfyf
          yfytyt fycy guyfyt yt yt yt yycycycycycycycy cy
          huzamdnjfbdkbfhbdhfbhdhfbhjdbfdhbfhdbfhjdhf
          afjdbfhjdbfjhdbhjfbjdbfhdfhdbfhjdbhjfbhjdbfhj]
          sjfojfjkdhjfhdkjhfjkhdjkhfjkhdjkhfjkdhjfk
          jkhdsjhfkjdhfkjhdkjhfkjhdjkfhkjdhjfkhjkdhf]djfj
          sfjkdhfkjhdjkhfkjdhfjkhdjkhfkjhdfjhdjhfjdfhjdfh
          dfjkdjfhkjdhjfhdjhfjhdjhfhdjfjdhjfhjdhfjdhfjdf
          dkhfkjdhfjhdjhfjhdjfhjdhfjhdjhfjhdfhjhdfjhdjhfj
          kjdfjkhjdhfkjhdjhfkjdhjfkdhj
          ajj
          aja
          ajaja

          abu
      </p>
    </Card>
    {/* <label className={styles['align-navbar-title']} value={obj.title} onChange={handleChange}>{obj.title}</label> */}
    {/* <label className={styles['align-navbar-title']} value={obj.body} onChange={handleChange}>{obj.body}</label> */}
  </div>
);


export default DisplayNote;
