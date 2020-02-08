const express = require('express');

const app = express();

// app comes with a use method, it's how you use middleware
// use takes 1 arg: the middleware you want to mount / run on the route
// You can mount as many pieces of middleware you chose
app.use(express.static('public'))
app.use(express.static('node_modules'))


app.listen(3000);