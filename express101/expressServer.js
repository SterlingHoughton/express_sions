const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// all is a method that takes 2 args:
// 1. route, 2. callback to run if the route is requested
app.all('/', (req, res) => {
  //Express handles hte basic headers, status code, mime-type etc.
  //Express handles the end (closing connection)
  // res.send('<h1>This is the home page.</h1>');
  res.sendFile(path.join(__dirname + '/node.html'));
});

app.listen(3000);