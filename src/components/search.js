import React from 'react';
import { Icon, Input } from 'react-materialize';
import PropTypes from 'prop-types';
import styles from '../styles/search.css';

const SearchView = ({ handleChange }) => (
// eslint-disable-next-line react/jsx-filename-extension
  <div >
    <Input label="Search Notes" name="search" className={`${styles['input-field']}`} onChange={handleChange} validate>
      <Icon className="purple">search</Icon>
    </Input>
  </div>
);

SearchView.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchView;
