import React from 'react';
import SearchBox from '../search-box/search-box';
import './selectron.css';

const Selectron = (props) => (
  <div className="selectron">
    <div className="selectron__wrapper">
      <div className="selectron__title">
        <h1>Productgroep</h1>
      </div>
      <div className="selectron__content">
        <SearchBox placeholder="Zoek op ..." />
      </div>
    </div>
  </div>
)

export default Selectron;
