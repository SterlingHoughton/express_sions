const http = require('http');
const fs = require('fs');
// the http module has a createServer method
// takes 1 arg:
// 1. callback - has 2 args: req, res
const server = http.createServer((req, res) => {
  // The url property is the path relative to the root domain the user is on / the request hits.
  if(req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    const homepageHTML = fs.readFileSync('node.html');
    res.write(homepageHTML);
    // close connection
    res.end();
  } else if (req.url === '/node.jpeg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' });
    const image = fs.readFileSync('node.jpeg');
    res.write(image);
    res.end();
  }
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h4>Sorry, this is not the page you are looking for.</h4>')
    res.end();
  };
  
});

// createServer returns an object with a listen method
// listen takes 1 arg:
// 1. port to listen for http traffic on
server.listen(3000);