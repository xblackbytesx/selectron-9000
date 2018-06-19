import React from 'react';
import PropTypes from 'prop-types';
import './searchbox.css';

import './search.svg';

const SearchBox = (props) => (
  <span className="searchbox">
    <input className="searchbox__input" type="search" placeholder={props.placeholder} />
  </span>
)

SearchBox.propTypes = {
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {
  placeholder: "Zoeken"
};

export default SearchBox;
