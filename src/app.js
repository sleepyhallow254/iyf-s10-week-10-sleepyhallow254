const express = require('express');

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// Routes
app.use('/api', routes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to CommunityHub API');
});

// Error handler
app.use(errorHandler);

module.exports = app;