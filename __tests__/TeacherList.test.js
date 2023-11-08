// __tests__/TeacherList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TeacherList from '../containers/TeacherList';
import '@testing-library/jest-dom'

const mockTeacherData = [
  {
    key:'1',
    nationalId: '123456789',
    title: 'Mr',
    name: 'John',
    surname: 'Doe',
    dob: '1990-01-01',
    teacherNumber: 'T123456',
    salary: 50000,
  },
  // Add more mock data as needed
];

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: mockTeacherData })),
  };
});

test('renders teacher list page with table', async () => {
  render(<TeacherList />);
  
  expect(await screen.findByText('Teacher List')).toBeInTheDocument();
  
  // Check if the table headers are present
  expect(await screen.findByText('National ID')).toBeInTheDocument();
  expect(await screen.findByText('Title')).toBeInTheDocument();
  expect(await screen.findByText('Name')).toBeInTheDocument();
  expect(await screen.findByText('Surname')).toBeInTheDocument();
  expect(await screen.findByText('Date of Birth')).toBeInTheDocument();
  expect(await screen.findByText('Teacher Number')).toBeInTheDocument();
  expect(await screen.findByText('Salary')).toBeInTheDocument();

  // Check if the mocked teacher data is displayed in the table
  expect(await screen.findByText(mockTeacherData[0].nationalId)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].title)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].name)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].surname)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].dob)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].teacherNumber)).toBeInTheDocument();
  expect(await screen.findByText(mockTeacherData[0].salary)).toBeInTheDocument();
});

// Add more tests for loading, error handling, and other scenarios
