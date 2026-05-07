// Validation middleware for posts
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

// Validation middleware for users
const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    const errors = [];
    
    if (!name || name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    if (!email || !email.includes('@')) {
        errors.push('Valid email is required');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    next();
};

module.exports = {
    validatePost,
    validateUser
};
