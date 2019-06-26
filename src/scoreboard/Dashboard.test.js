import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

xit('should render', () => {
  render(<Dashboard />);
});

xit('should display header', () => {
  const { getByText } = render(<Dashboard />);

  const header = getByText(/score/i);
  expect(header).toBeVisible();
});

it('displays a button that increments balls + 1', () => {
  const { getAllByTestId } = render(<Dashboard />);
  const ballbutton = getAllByTestId('ballbtn');
  expect(ballbutton).toBeVisible;
});
