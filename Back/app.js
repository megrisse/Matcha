// Import the express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
