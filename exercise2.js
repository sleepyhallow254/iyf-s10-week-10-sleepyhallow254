// fs - File System
const fs = require('fs');

// Read file (synchronous)
const content = fs.readFileSync('hello.js', 'utf-8');
console.log("=== Synchronous Read ===");
console.log(content);
console.log("\n");

// Read file (asynchronous - preferred)
console.log("=== Asynchronous Read ===");
fs.readFile('hello.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Write file
fs.writeFileSync('output.txt', 'Hello, World!');
console.log("File written to output.txt");

// path - Path utilities
const path = require('path');
console.log("\n=== Path Utilities ===");
console.log(path.join(__dirname, 'files', 'data.json'));
console.log(path.extname('photo.jpg'));  // .jpg
