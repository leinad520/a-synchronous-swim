const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(messageQueue.dequeue());

    var filePath = path.join('../spec', '/water-lg.jpg');
    var stat = fileSystem.statSync(filePath);
    
    response.writeHead(200, {
        'Content-Type': 'jpg', 
        'Content-Length': stat.size
    });
    var readStream = fs.createReadStream(filePath);
    readStream.on('data', function(data) {
      response.write(data);
    });
    res.end();
  }
  res.writeHead(200, headers);
  res.end();
};
