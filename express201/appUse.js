const express = require('express');

const app = express();

// express is 2 things
// 1. Router
// 2. Series of middleware that comprises a web framework
// req ------MIDDLEWARE-----> res
// a Middlware function is ANY function that has access to the req, res, and next object (express)

function validateUser(req, res, next) {
  // get info out of the request object
  // do some stuff with the db
  // res.locals - prebuilt property 
  res.locals.validated = true
  console.log('VALIDATED RAN')
  // hand control off to the next piece of middleware
  next();
}

// use validateUser @ the application level (every request will run through here if no path is provided IE app.use(validateUser))
app.use('/admin', validateUser);

app.get('/', (req, res, next) => {
  res.send(`<h1>Main Page</h1>`);
  console.log(res.locals.validated);
});

app.get('/admin', (req, res, next) => {
  res.send(`<h1>Admin Page</h1>`);
  console.log(res.locals.validated);
});

app.listen(3000);