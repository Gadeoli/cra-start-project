import React from 'react';
import ReactDOM from 'react-dom';
import AlertsToasts from './AlertsToasts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlertsToasts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
