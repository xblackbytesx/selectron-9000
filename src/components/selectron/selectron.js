import React from 'react';
import SearchBox from '../search-box/search-box';
import ResultList from '../result-list/result-list';
import Button from '../button/button';
import './selectron.css';

const Selectron = (props) => (
  <div className="selectron">
    <div className="selectron__wrapper">
      <div className="selectron__title">
        <h1>Productgroep</h1>
      </div>
      <div className="selectron__content">
        <SearchBox placeholder="Zoek op ..." />
        <ResultList props={props.props.data} />
      </div>
      <div className="selectron__action">
        <Button>Toepassen</Button>
      </div>
    </div>
  </div>
)

export default Selectron;
