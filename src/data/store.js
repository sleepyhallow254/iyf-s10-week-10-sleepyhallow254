// In-memory data store
let posts = [
    { 
        id: 1, 
        title: "Getting Started with Node.js", 
        content: "Node.js is a JavaScript runtime...",
        author: "John Doe",
        createdAt: "2026-01-15T10:00:00Z",
        likes: 10
    },
    { 
        id: 2, 
        title: "Express.js Fundamentals", 
        content: "Express is a web framework...",
        author: "Jane Smith",
        createdAt: "2026-01-16T14:30:00Z",
        likes: 15
    }
];

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

let nextPostId = 3;
let nextUserId = 3;

module.exports = {
    posts,
    users,
    nextPostId,
    nextUserId,
    // Helper to update nextPostId
    getNextPostId() {
        return this.nextPostId++;
    },
    getNextUserId() {
        return this.nextUserId++;
    }
};
