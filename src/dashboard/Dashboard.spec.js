import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Display from '../display/Display.js';
import Controls from '../controls/Controls.js';
import Dashboard from './Dashboard';

describe('the Dashboard component', () => {
  it('should call the close function when clicked', () => {
    const mockClose = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockClose} />);
    const closeButton = getByText(/close gate/i);
  
    fireEvent.click(closeButton);
  
    expect(mockClose).toHaveBeenCalled();
  });
  
  it('should call the lock function only when the gate is closed', () => {
    const mockLock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={mockLock} locked={false} closed={true} />);
    const lockButton = getByText(/lock gate/i);
    console.log(lockButton)
  
    fireEvent.click(lockButton);
  
    expect(mockLock).toHaveBeenCalled();
  });
})
