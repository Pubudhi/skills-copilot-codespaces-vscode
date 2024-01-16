// Create a web server
// Listen for requests
// Read the file
// Parse the file
// Write the file
// Send a response

// Require the http module
const http = require('http');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    // Set the content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<p>Hello</p>');
    // res.end();

    // Send an html file
    // res.end('<p>Hello again</p>');

    // Send an html file
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.end();
    //     }
    //     res.end(data);
    // });

    // Routing
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            // Redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // Send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

// Listen for requests
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});




