// require() - Used to import modules, JSON, and local files.
const express = require('express')
const cors = require('cors')

// Have our environment variables in the .env file
require('dotenv').config()

// => Create Express Web Server
const app = express(); // Load express
const port = process.env.PORT || 5000; // Load port from .env file or default 5000

// => Middlewares
app.use(express.json()) // Enable bodyParser 
app.use(cors()) // Enable CORS - Cross Origin Resource Sharing

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})