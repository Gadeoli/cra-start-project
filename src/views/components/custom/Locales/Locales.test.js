import React from 'react';
import ReactDOM from 'react-dom';
import Locales from './Locales';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Locales />, div);
  ReactDOM.unmountComponentAtNode(div);
});
