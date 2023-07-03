import "@testing-library/jest-dom";
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { FormButtons } from './FormButtons';

describe('FormButtons', () => {
  it('renders without crashing', () => {
    const mockOnCancel = jest.fn();
    render(<FormButtons onCancel={mockOnCancel} />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('calls onCancel when Cancel button is clicked', () => {
    const mockOnCancel = jest.fn();
    render(<FormButtons onCancel={mockOnCancel} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });

  it('does not call onCancel when Submit button is clicked', () => {
    const mockOnCancel = jest.fn();
    render(<FormButtons onCancel={mockOnCancel} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(mockOnCancel).not.toHaveBeenCalled();
  });
});
