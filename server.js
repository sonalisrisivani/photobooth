const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Handle all routes by serving the appropriate HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/select.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'select.html'));
});

app.get('/photo.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'photo.html'));
});

app.get('/print.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'print.html'));
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`🚀 Photobooth server running on http://localhost:${PORT}`);
  console.log(`📸 Navigate to http://localhost:${PORT} to start using the photobooth`);
});