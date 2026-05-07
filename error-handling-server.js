const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// ===== Exercise 1: Error Handling Middleware =====

// Custom error class
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Route that throws error
app.get('/api/error-test', (req, res, next) => {
    try {
        throw new ApiError('Something went wrong', 500);
    } catch (error) {
        next(error);  // Pass to error handler
    }
});

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Sample async route
app.get('/api/users', asyncHandler(async (req, res) => {
    // Simulate async operation
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
    res.json(users);
}));

// ===== Exercise 2: Validation Middleware =====

// Simple validation middleware
const validatePost = (req, res, next) => {
    const { title, content, author } = req.body;
    const errors = [];
    
    if (!title || title.length < 3) {
        errors.push('Title must be at least 3 characters');
    }
    
    if (!content || content.length < 10) {
        errors.push('Content must be at least 10 characters');
    }
    
    if (!author) {
        errors.push('Author is required');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    next();
};

// In-memory posts store
let posts = [];
let nextId = 1;

// Apply to route
app.post('/api/posts', validatePost, (req, res) => {
    const { title, content, author } = req.body;
    
    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString()
    };
    
    posts.push(newPost);
    res.status(201).json(newPost);
});

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Test route
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK' });
});

// 404 handler
app.use((req, res, next) => {
    const error = new ApiError('Route not found', 404);
    next(error);
});

// Error handling middleware (must be last!)
app.use((err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message,
            status: statusCode
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
