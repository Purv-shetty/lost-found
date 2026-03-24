const express = require("express");

const app = express();
const port = 4000;

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
  res.send('POORVI LOVES KRISHNA');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});


app.put('/about/:id', (req,res)=>{
  const id = req.params.id
  console.log(id)
  res.send("Updated")
})

app.get('/search', (req, res) => {
  // Access query parameters using req.query
  const { q, category } = req.query;
  console.log(req.query)
  res.send(`Search query: ${q}, Category: ${category || 'none'}`);
});

const logger = (req,res,next)=>{
  console.log('First')
  next()
}

const protected = (req, res, next)=>{
  const userLogin = ({
    isLogin : false,
    username: "Krishna"
  })

  if(userLogin.isLogin){
    next()
  }else{
    return res.send({message: "login before"})
  }
}
app.use(logger);

app.use(protected)
// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Catch all other routes
app.all('/{*splat}', (req, res) => {
  res.status(404).send('404 - Page not found');
});


app.listen(port, function () {
  console.log(`Server Is Running at port ${port}`);
});

