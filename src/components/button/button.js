import React from 'react';
import './button.css';

const Button = (props) => (
  <button
    type="button"
    className="button button--primary">
    {props.children}
  </button>
)

export default Button;
