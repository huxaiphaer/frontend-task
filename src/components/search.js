import React from 'react';
import { Icon, Input } from 'react-materialize';

const SearchView = ({handleChange}) => (
  <div>
    <Input s={12} label="Search Notes" name={'search'} onChange={handleChange} validate><Icon>search</Icon></Input>
  </div>
);

export default SearchView;
