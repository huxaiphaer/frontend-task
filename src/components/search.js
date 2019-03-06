import React from 'react';
import { Icon, Input } from 'react-materialize';
import PropTypes from 'prop-types';

const SearchView = ({ handleChange }) => (
  <div>
    <Input s={12} label="Search Notes" name="search" onChange={handleChange} validate><Icon>search</Icon></Input>
  </div>
);

SearchView.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SearchView;
