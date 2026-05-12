# Week 10: CommunityHub API

## Author
- **Name:** Joe
- **GitHub:** [@sleepyhallow254](https://github.com/sleepyhallow254)
- **Date:** May 12, 2026

---

## Project Description
CommunityHub API is a backend REST API built using Node.js and Express.js.  
The project allows users to create, read, update, delete, and like community posts using different API endpoints.

This project was built to learn backend development concepts such as:
- Express routing
- CRUD operations
- Middleware
- Error handling
- RESTful APIs
- Environment variables

---

## Technologies Used
- Node.js
- Express.js
- JavaScript
- dotenv
- Git
- GitHub
- Thunder Client / Postman

---

## Features
- Get all posts
- Get single post by ID
- Create new posts
- Update existing posts
- Delete posts
- Like posts
- Validation middleware
- Logger middleware
- Error handling middleware
- Organized MVC-style structure
- Environment variables support

---

## Project Structure

```text
iyf-s10-week-10-sleepyhallow254/
│
├── README.md
├── package.json
├── server.js
├── .env.example
├── .gitignore
│
└── src/
    ├── app.js
    ├── routes/
    ├── controllers/
    ├── middleware/
    └── data/
```

---

## API Endpoints

### Posts Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get single post |
| POST | `/api/posts` | Create a post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |
| PATCH | `/api/posts/:id/like` | Like a post |

---

## How to Run

### 1. Clone Repository

```bash
git clone https://github.com/sleepyhallow254/iyf-s10-week-10-sleepyhallow254.git
```

### 2. Navigate Into Project

```bash
cd iyf-s10-week-10-sleepyhallow254
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

## Testing the API

The API was tested using:
- Thunder Client
- Postman

Example endpoint:

```text
GET http://localhost:3000/api/posts
```

---

## Lessons Learned
While building this project, I learned:
- How backend servers work
- How to use Express.js
- How CRUD operations function
- How middleware works in Express
- How to structure backend applications
- How APIs send and receive JSON data
- How to use GitHub for backend projects

---

## Challenges Faced

### Middleware Errors
At first, some middleware files were not exporting correctly which caused server crashes.

### Solution
I corrected the `module.exports` syntax and restarted the server.

---

### Route Errors
Some routes returned "Cannot find module" errors.

### Solution
I corrected the file paths and ensured all folders were properly connected.

---

## Screenshots

### API Running Successfully
Add screenshots here if needed.

---

## Live Demo
Currently running locally using:

```text
http://localhost:3000
```

---

## GitHub Repository

Repository Link:

```text
https://github.com/sleepyhallow254/iyf-s10-week-10-sleepyhallow254
```

---

## Submission Checklist

- [x] Node.js server created
- [x] Express installed
- [x] CRUD API completed
- [x] Middleware implemented
- [x] Error handling added
- [x] Environment variables configured
- [x] Organized folder structure
- [x] API tested using Thunder Client/Postman
- [x] README.md completed
- [x] Repository pushed to GitHub

---

## Commit Message Examples Used

```bash
Add: CommunityHub API routes
Add: middleware and validation
Fix: validation middleware export error
Docs: update README file
```