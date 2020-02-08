const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static('public'));
// when type ("Content-Type") is "appliation/json"
app.use(express.json());
// when type ("Content-Type") is "application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }));


// express.json() and urlencoded() are important because they will collect almost any
// type of submitted data, parse it for you, and give it to you in JSON format. 

app.post('/ajax', (req, res) => {
  // req.body only exists because of the express.json() and urlencoded() middleware
  console.log(req.body);
  res.json("Test")
});

app.listen(3000);