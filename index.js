require('dotenv').config()
const express = require('express'); // Import express
const app = express();              // Create an express app

const port = process.env.PORT || 3000;                  // Define the port

// A simple route (optional, just for checking)
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/login', (req, res) => {
    res.send(' loooginnn');
  });
  













// Start the server
app.listen(process.env.port, () => {
  console.log(`Server is listening on port ${port}`);
});