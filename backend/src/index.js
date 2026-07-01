import dotenv from 'dotenv'; // dotenv is used to load environment variables from a .env file into process.env
import connectDB from './config/database.js'; // Import the connectDB function from the database configuration file
dotenv.config(
    {path: './.env'}
);

const PORT = process.env.PORT || 3000;  // Set the server port from environment variables or default to 3000


const startServer = async () => {
  try {
    // const { default: connectDB } = await import('./config/database.js');
    await connectDB(); // Connect to the database
    
    app.on('error', (err) => { // Handle server errors
      console.error('Server error:', err);
    });

    app.listen(PORT, () => { // Start the server and listen on the specified port
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer(); // Call the startServer function to initiate the server
