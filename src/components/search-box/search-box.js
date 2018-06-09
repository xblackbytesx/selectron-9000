import React from 'react';
import PropTypes from 'prop-types';
import './searchbox.css';

const SearchBox = (props) => (
  <input className="searchbox" type="search" placeholder={props.placeholder} />
)

SearchBox.propTypes = {
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {
  placeholder: "Zoeken"
};

export default SearchBox;
