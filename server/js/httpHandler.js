const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // if req.method = get then res.end(randomCommand)
  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write('server test');
  }
  // res.writeHead(200, headers);
  // res.end();
};
