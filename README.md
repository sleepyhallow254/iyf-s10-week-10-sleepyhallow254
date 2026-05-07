# Week 10: Node.js Express API

## Author
- **Name:** Sleepy Hallow
- **GitHub:** [@sleepyhallow254](https://github.com/sleepyhallow254)
- **Date:** May 7, 2026

## Project Description
A comprehensive Node.js Express REST API featuring posts and users management with full CRUD operations, middleware implementation, error handling, and modular architecture. This project demonstrates building scalable web APIs using Express.js with proper separation of concerns.

## Technologies Used
- Node.js
- Express.js
- dotenv (environment variables)
- JavaScript (ES6+)

## Features
- **RESTful API Endpoints**: Complete CRUD operations for posts and users
- **Middleware Implementation**: Logger, error handler, validation, and authentication
- **Modular Architecture**: Organized code structure with routes, controllers, and middleware
- **Environment Configuration**: Secure environment variable management
- **Error Handling**: Comprehensive error handling with custom error classes
- **Data Validation**: Input validation for API requests
- **Query Filtering**: Advanced filtering and sorting capabilities
- **In-Memory Data Store**: Simple data persistence for demonstration

## API Endpoints

### Posts API
- `GET /api/posts` - Get all posts (with filtering and sorting)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `PATCH /api/posts/:id/like` - Like a post

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Health Check
- `GET /api/health` - API health status
- `GET /api/time` - Current server time

## How to Run
1. Clone this repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The API will be available at `http://localhost:3000`

## Lessons Learned
- Building RESTful APIs with Express.js
- Implementing middleware for logging, validation, and error handling
- Organizing code with modular architecture (routes, controllers, middleware)
- Managing environment variables securely
- Creating comprehensive error handling systems
- Implementing CRUD operations with proper HTTP status codes
- Using query parameters for filtering and sorting

## Challenges Faced
- **Modular Architecture**: Initially struggled with organizing the codebase, but solved by implementing a clear folder structure with separation of concerns.
- **Error Handling**: Implementing comprehensive error handling required understanding Express error middleware and creating custom error classes.
- **Middleware Ordering**: Ensuring proper middleware execution order was challenging but resolved by understanding Express middleware flow.
- **Environment Variables**: Setting up dotenv and ensuring secure configuration management.

## Project Structure
```
iyf-s10-week-10-yourusername/
├── src/
│   ├── app.js                 # Main Express app
│   ├── routes/
│   │   ├── index.js          # Route mounting
│   │   ├── posts.js          # Posts routes
│   │   └── users.js          # Users routes
│   ├── controllers/
│   │   ├── postsController.js # Posts business logic
│   │   └── usersController.js # Users business logic
│   ├── middleware/
│   │   ├── logger.js         # Request logging
│   │   ├── errorHandler.js   # Error handling
│   │   └── validate.js       # Input validation
│   └── data/
│       └── store.js          # In-memory data store
├── server.js                 # Server entry point
├── package.json
├── .env                      # Environment variables
└── .gitignore
```

## Live Demo
The API is deployed and can be tested at: `http://localhost:3000`

## Testing the API
You can test the API endpoints using tools like:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Browser for GET requests