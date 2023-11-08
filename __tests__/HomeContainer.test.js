// __tests__/HomeContainer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import HomeContainer from '../containers/Home';
import '@testing-library/jest-dom'

describe('HomeContainer Component', () => {
  it('renders the welcome message', () => {
    const { getByText } = render(<HomeContainer />);
    const welcomeMessage = getByText('Welcome to Our Platform');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('renders "Continue as a Teacher" card', () => {
    const { getByText } = render(<HomeContainer />);
    const teacherCard = getByText('Continue as a Teacher');
    expect(teacherCard).toBeInTheDocument();
  });

  it('renders "Continue as a Student" card', () => {
    const { getByText } = render(<HomeContainer />);
    const studentCard = getByText('Continue as a Student');
    expect(studentCard).toBeInTheDocument();
  });

});
