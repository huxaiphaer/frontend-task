import React from 'react';
import { Icon, Input } from 'react-materialize';

const SearchView = () => (
  <div>
    <Input s={12} label="Search Notes" validate><Icon>search</Icon></Input>
  </div>
);

export default SearchView;
