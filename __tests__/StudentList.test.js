// __tests__/StudentList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentList from '../containers/StudentList';

const mockStudentData = [
  {
    nationalId: '987654321',
    name: 'Alice',
    surname: 'Johnson',
    dob: '2000-01-01',
    studentNumber: 'S56789',
  },
  // Add more mock data as needed
];

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: mockStudentData })),
  };
});

test('renders student list page with table', async () => {
  render(<StudentList />);
  
  expect(await screen.findByText('Student List')).toBeInTheDocument();
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  
  // Check if the table headers are present
  expect(await screen.findByText('National ID')).toBeInTheDocument();
  expect(await screen.findByText('Name')).toBeInTheDocument();
  expect(await screen.findByText('Surname')).toBeInTheDocument();
  expect(await screen.findByText('Date of Birth')).toBeInTheDocument();
  expect(await screen.findByText('Student Number')).toBeInTheDocument();

  // Check if the mocked student data is displayed in the table
  expect(await screen.findByText(mockStudentData[0].nationalId)).toBeInTheDocument();
  expect(await screen.findByText(mockStudentData[0].name)).toBeInTheDocument();
  expect(await screen.findByText(mockStudentData[0].surname)).toBeInTheDocument();
  expect(await screen.findByText(mockStudentData[0].dob)).toBeInTheDocument();
  expect(await screen.findByText(mockStudentData[0].studentNumber)).toBeInTheDocument();
});

// Add more tests for loading, error handling, and other scenarios
