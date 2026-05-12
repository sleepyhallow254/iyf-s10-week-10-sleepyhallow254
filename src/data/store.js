const store = {
    posts: [
        {
            id: 1,
            title: "Getting Started with Node.js",
            content: "Node.js is a JavaScript runtime environment.",
            author: "John Doe",
            createdAt: new Date().toISOString(),
            likes: 10
        },
        {
            id: 2,
            title: "Express.js Fundamentals",
            content: "Express is a Node.js framework.",
            author: "Jane Smith",
            createdAt: new Date().toISOString(),
            likes: 15
        }
    ],

    nextId: 3
};

module.exports = store;