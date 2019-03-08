import React from 'react';
import { Navbar } from 'react-materialize';

// eslint-disable-next-line react/jsx-filename-extension
const brandColor = <span style={{ color: '#56276f', marginLeft: '10px', fontWeight: 'bold' }}>NoteTakingApp</span>;
const NavBar = () => (
  <div>
    <Navbar className="Header white" brand={brandColor} fixed right />
  </div>
);

export default NavBar;
