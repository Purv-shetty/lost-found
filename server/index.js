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

// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Catch all other routes
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

app.put('/about/:id', (req,res)=>{
  const id = req.params.id
  console.log(id)
  res.send("Updated")
})
