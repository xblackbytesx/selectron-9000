import React from 'react';
import './searchbox.css';

const SearchBox = (props) => (
  <input className="searchbox" type="search" placeholder={props.placeholder} />
)

export default SearchBox;
