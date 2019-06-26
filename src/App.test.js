import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { italic } from 'ansi-colors';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.unmountComponentAtNode(div);
});
