import React from 'react';
import TestRenderer from 'react-test-renderer';
import TickerTape from './TickerTape';

it('renders correctly', () => {
  const tree = TestRenderer(<TickerTape />).toJSON();
  expect(tree).toMatchSnapshot();
});