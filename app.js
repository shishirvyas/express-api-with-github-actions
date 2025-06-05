const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Required root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Azure Express API',
    status: 'running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Your API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Azure!' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});