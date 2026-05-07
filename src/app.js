const express = require('express');
const logger = require('./middleware/logger');
const { errorHandler } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

const addRequestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }

    next();
};

app.use(addRequestTime);

// Public routes
app.get('/', (req, res) => {
    res.send('Welcome to CommunityHub API');
});

app.get('/about', (req, res) => {
    res.send('CommunityHub - A community platform');
});

app.get('/api/time', (req, res) => {
    res.json({ requestTime: req.requestTime });
});

app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: 'This is protected data' });
});

app.use('/api', routes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handler (last)
app.use(errorHandler);

module.exports = app;
