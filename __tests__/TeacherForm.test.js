// __tests__/TeacherForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TeacherForm from '../containers/TeacherForm';
import '@testing-library/jest-dom'

test('renders teacher form with input fields and a submit button', () => {
  render(<TeacherForm />);
  
  // Check if the required elements are present
  expect(screen.getByText('National ID Number')).toBeInTheDocument();
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Surname')).toBeInTheDocument();
  expect(screen.getByText('Date of Birth')).toBeInTheDocument();
  expect(screen.getByText('Teacher Number')).toBeInTheDocument();
  expect(screen.getByText('Salary')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Save Teacher Details' })).toBeInTheDocument();
});

