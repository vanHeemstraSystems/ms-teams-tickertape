import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

test('renders Security Risk Dashboard text', () => {
  render(<Dashboard />)
  const textElement = screen.getByText('Security Risk Dashboard')
  expect(textElement).toBeInTheDocument()
})