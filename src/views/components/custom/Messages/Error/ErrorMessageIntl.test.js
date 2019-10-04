import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessageIntl from './ErrorMessageIntl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorMessageIntl />, div);
  ReactDOM.unmountComponentAtNode(div);
});
