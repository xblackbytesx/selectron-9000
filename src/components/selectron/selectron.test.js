import React from 'react';
import ReactDOM from 'react-dom';
import Selectron from './selectron';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {data: ['apple', 'pear', 'peach']};
  ReactDOM.render(<Selectron props={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
