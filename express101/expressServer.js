const express = require('express');

const app = express();

// all is a method that takes 2 args:
// 1. route, 2. callback to run if the route is requested
app.all('*', (req, res) => {
  //Express handles hte basic headers, status code, mime-type etc.
  //Express handles the end (closing connection)
  res.send('<h1>This is the home page.</h1>');
});

app.listen(3000);