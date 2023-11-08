// __tests__/TeacherForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TeacherForm from '../containers/TeacherForm';

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

test('submits teacher form with valid data', () => {
  render(<TeacherForm />);
  
  // Fill in the form fields with valid data
  fireEvent.input(screen.getByLabelText('National ID Number'), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Mr' } });
  fireEvent.input(screen.getByLabelText('Name'), { target: { value: 'John' } });
  fireEvent.input(screen.getByLabelText('Surname'), { target: { value: 'Doe' } });
  fireEvent.input(screen.getByLabelText('Date of Birth'), { target: { value: '1990-01-01' } });
  fireEvent.input(screen.getByLabelText('Teacher Number'), { target: { value: 'T123456' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: 'Save Teacher Details' }));
  
  // Add your assertions for form submission, e.g., check if the API call is made
});

// Add more tests for form validation and error handling
