import React from 'react';

const ResultListItem = (props) => (
  <li>
    <label>
      <input type="checkbox" />
      <span dangerouslySetInnerHTML={props.value}></span>
    </label>
  </li>
)

export default ResultListItem;
