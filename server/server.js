const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 4000;

// In-memory storage for teachers and students
const teachersData = [];
const studentsData = [];

// Middleware for handling JSON request bodies
server.use(bodyParser.json());
server.use(cors());

// Serve static files (e.g., your compiled Next.js frontend)
server.use(express.static(path.join(__dirname, '.next/static')));

// Define API routes for saving teacher and student data
server.post('/api/teachers', (req, res) => {
  const teacherData = req.body;
  teachersData.push(teacherData);
  res.json({ message: 'Teacher data saved successfully' });
});

server.post('/api/students', (req, res) => {
  const studentData = req.body;
  studentsData.push(studentData);
  res.json({ message: 'Student data saved successfully' });
});

// Define API routes for retrieving teachers and students list
server.get('/api/teachers', (req, res) => {
  res.json(teachersData);
});

server.get('/api/students', (req, res) => {
  res.json(studentsData);
});

// Handle all other requests
server.get('*', (req, res) => {
  res.status(200).send('Welcome Home');
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server