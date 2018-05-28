import React from 'react';
import './result-list-item.css';

const ResultListItem = (props) => (
  <li className="selectron__result-list__item">
    <label className="awesome-checkbox">
      <input type="checkbox" />
      <span dangerouslySetInnerHTML={props.value}></span>
    </label>
  </li>
)

export default ResultListItem;
