import React, { Component } from 'react';

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
    console.log(this.props);

    let collectTags = () => {
      var myArray = this.props.props;
      var data = [];

      for (var value of myArray) {
        data += `<div>${value}</div>`;
      }

      return {__html: data};
    }

    return (
      <div className={`selectron__result-list selectron__result-list--${this.state.expanded ? `expanded` : `collapsed`}`}>
        <div dangerouslySetInnerHTML={collectTags()} />
        <p>Here be some checkboxes..</p>
      </div>
    );
  }
}

export default ResultList;
