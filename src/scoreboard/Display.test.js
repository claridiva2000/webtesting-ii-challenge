import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Display from './Display';

it('should render', () => {
  render(<Display />);
});
