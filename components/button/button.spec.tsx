import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('should render correctly', () => {
    const { container, getByText } = render(<Button onClick={jest.fn}>Button</Button>);
    expect(getByText('Button')).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
