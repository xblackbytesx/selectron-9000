import React from 'react';
import ReactDOM from 'react-dom';
import ResultList from './result-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultList props={['apple', 'pear', 'peach']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
