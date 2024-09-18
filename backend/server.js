// Import required modules
const http = require('http');
const app = require('./app');

// Function to normalize the port value
const normalizePort = val => {
  const port = parseInt(val, 10); // Parse the port value to an integer

  if (isNaN(port)) {
    // If the value is not a number, return it as is (e.g., a named pipe)
    return val;
  }
  if (port >= 0) {
    // If the port is a valid number and non-negative, return it
    return port;
  }
  return false; // Otherwise, return false
};

// Get the port from environment variables or default to 3000
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port); // Set the port on the Express app instance

// Function to handle errors during server startup
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    // If the error is not related to listening, throw it
    throw error;
  }
  
  // Determine the bind address (pipe name or port number)
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;

  // Handle specific types of errors
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1); // Exit with failure code if permissions are insufficient
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1); // Exit with failure code if the port is already in use
      break;
    default:
      throw error; // Rethrow any other errors
  }
};

// Create an HTTP server and pass the Express app as the request handler
const server = http.createServer(app);

// Set up event listeners for the server
server.on('error', errorHandler); // Listen for errors and handle them
server.on('listening', () => {
  // Log a message when the server starts listening
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

// Start the server and listen on the specified port
server.listen(port);
