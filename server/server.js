// server.js
const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 4000;

// Serve static files (e.g., your compiled Next.js frontend)
server.use(express.static(path.join(__dirname, '.next/static')));

// Define your API routes, if any
server.get('/api/someRoute', (req, res) => {
  res.json({ message: 'This is an API route' });
});

// Handle all other requests
server.get('*', (req, res) => {
  res.status(200).send('Welcome Home');
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${port}`);
});
