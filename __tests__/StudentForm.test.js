// __tests__/StudentForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StudentForm from '../containers/StudentForm';
import '@testing-library/jest-dom'

test('renders student form with input fields and a submit button', () => {
  render(<StudentForm />);
  
  // Check if the required elements are present
  expect(screen.getByText('National ID Number')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Surname')).toBeInTheDocument();
  expect(screen.getByText('Date of Birth')).toBeInTheDocument();
  expect(screen.getByText('Student Number')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Save Student Details' })).toBeInTheDocument();
});
