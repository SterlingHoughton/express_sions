const express = require('express');

const app = express();

// app object has some methods:
// HTTP verbs / REST verbs
// CRUD app correspondence
// 1. GET
// The browser by default always makes a GET request
// 2. POST
// 3. DELETE
// 4. PUT
// app.get(), app.post(), app.delete(), app.put() - Takes 2 args:
// 1. path, 2. Callback to run if an HTTP request that matches THIS verb
// is made to the path in #1.

// Routing system in express is meant to handle 2 things
// 1. the VERB (type of HTTP request), 2. the PATH you want to fetch
// Express works from the top down (will find the first match unless EXPLICITLY told not too)
app.get('/', (req, res) => {
  res.send(`<h1>Welcome to the GET homepage</h1>`)
});

app.post('/', (req, res) => {
  res.send(`<h1>Welcome to the POST homepage</h1>`)
});

app.delete('/', (req, res) => {
  res.send(`<h1>Welcome to the POST homepage</h1>`)
});

app.put('/', (req, res) => {
  res.send(`<h1>Welcome to the POST homepage</h1>`)
});

app.listen(3000);