import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.write('Hello World');

    res.writeHead(500, {'Content-Type': 'application/json'})

    res.end(JSON.stringify({message: "Server Error"}));
})

// if use express u dont need to end because it is automatic


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});