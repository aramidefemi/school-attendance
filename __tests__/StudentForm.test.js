// __tests__/StudentForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StudentForm from '../containers/StudentForm';

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

test('submits student form with valid data', () => {
  render(<StudentForm />);
  
  // Fill in the form fields with valid data
  fireEvent.input(screen.getByLabelText('National ID Number'), { target: { value: '987654321' } });
  fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'Alice' } });
  fireEvent.input(screen.getByLabelText('Surname'), { target: { value: 'Johnson' } });
  fireEvent.input(screen.getByLabelText('Date of Birth'), { target: { value: '2000-01-01' } });
  fireEvent.input(screen.getByLabelText('Student Number'), { target: { value: 'S56789' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: 'Save Student Details' }));
  
  // Add your assertions for form submission, e.g., check if the API call is made
});

// Add more tests for form validation and error handling
