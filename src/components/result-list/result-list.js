import React, { Component } from 'react';
import ResultListItem from '../result-list-item/result-list-item';
import './result-list.css';

class ResultList extends Component {
  state = {
    expanded: false
  }

  toggleState = () => {
    this.state.expanded
      ? this.setState({expanded: false})
      : this.setState({expanded: true})
  }

  render() {
    return (
      <div className={`selectron__result-list selectron__result-list--${this.state.expanded ? `expanded` : `collapsed`}`}>
        <ul>
          {
            this.props.props.map((value, index) => {
              return (
                <ResultListItem value={{__html: value}} key={index} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default ResultList;
