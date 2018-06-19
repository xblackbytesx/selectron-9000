import React, { Component } from 'react';
import './result-list-item.css';

class ResultListItem extends Component {
  state = {
    active: false
  }

  toggleState = () => {
    this.state.active
      ? this.setState({active: false})
      : this.setState({active: true})
  }

  render() {
    return(
      <li onClick={this.toggleState} className={`selectron__result-list__item${this.state.active ? ` selectron__result-list--active` : ''}`}>
        <label className="awesome-checkbox">
          <input type="checkbox" />
          <span dangerouslySetInnerHTML={this.props.value}></span>
        </label>
      </li>
    )
  }
}

export default ResultListItem;
