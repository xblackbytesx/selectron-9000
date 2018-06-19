import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = (props) => {

  const children = props.children;

  return (
    <button
      type="button"
      className="button button--primary button--fullwidth">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};

Button.defaultProps = {
  children: "Bevestigen"
};

export default Button;
