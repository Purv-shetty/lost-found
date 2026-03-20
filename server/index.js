const express = require("express");

const app = express();
const port = 4000;
app.listen(port, function () {
  console.log(`Server Is Running at port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

/* 
Basic Routing

Routing refers to how an application responds to client requests to specific endpoints (URIs) using different HTTP methods (GET, POST, PUT, DELETE, etc.).

Express provides simple methods to define routes that correspond to HTTP methods:

    app.get() - Handle GET requests
    app.post() - Handle POST requests
    app.put() - Handle PUT requests
    app.delete() - Handle DELETE requests
    app.all() - Handle all HTTP methods

*/