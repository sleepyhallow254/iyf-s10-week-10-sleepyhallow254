const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// ===== Exercise 1: Understanding Middleware =====

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();  // Pass to next middleware/route
};

// Apply to all routes
app.use(logger);

// Request time middleware
const addRequestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

app.use(addRequestTime);

// Use in route
app.get('/api/time', (req, res) => {
    res.json({ requestTime: req.requestTime });
});

// ===== Exercise 2: Built-in Middleware =====

// Parse JSON bodies (already applied)
// app.use(express.json());

// Parse URL-encoded bodies (forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (create public folder)
app.use(express.static('public'));

// ===== Exercise 3: Route-specific Middleware =====

// Auth check middleware
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }
    
    // In real app, verify token here
    next();
};

// Apply to specific routes
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: 'This is protected data' });
});

// Apply to all routes starting with /api/admin
app.use('/api/admin', requireAuth);

// Admin routes
app.get('/api/admin/users', (req, res) => {
    res.json({ message: 'Admin users list' });
});

// Test route
app.get('/api/public', (req, res) => {
    res.json({ message: 'This is public data' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
