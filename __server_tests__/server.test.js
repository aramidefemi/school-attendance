// __server_tests__/server.test.js
const request = require('supertest');
const server = require('../server');

// Test data for a teacher
const teacherData = {
  nationalId: '123456789',
  title: 'Mr',
  name: 'John',
  surname: 'Doe',
  dob: '1990-01-01',
  teacherNumber: 'T123456',
  salary: 50000,
};

// Test data for a student
const studentData = {
  nationalId: '987654321',
  name: 'Alice',
  surname: 'Johnson',
  dob: '2000-01-01',
  studentNumber: 'S56789',
};

describe('API Tests', () => {
  it('should save teacher data', async () => {
    const response = await request(server)
      .post('/api/teachers')
      .send(teacherData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Teacher data saved successfully');
  });

  it('should save student data', async () => {
    const response = await request(server)
      .post('/api/students')
      .send(studentData);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Student data saved successfully');
  });

  it('should retrieve a list of teachers', async () => {
    const response = await request(server).get('/api/teachers');
    const teachers = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(teachers)).toBe(true);
  });

  it('should retrieve a list of students', async () => {
    const response = await request(server).get('/api/students');
    const students = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(students)).toBe(true);
  });
});
