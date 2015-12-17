var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

//Get pathname.base and check if base is in  archive.paths.list
//If in list, send file in response.end() and 200 status code
//If not on list, return loading page
  //If server attempts to get page from internet and gets 404
  //Return 404 to user
//Cron job updates already archived pages?

exports.handleRequest = function (req, res) {
  var pathname=path.parse(req.url);
  res.writeHead(200, helpers.headers);

  fs.readFile(archive.paths.list, function(err, data){
    if(err){
      console.log("err!", err);
    } else {
      console.log("retrieved data!", data)
    }
  });

  // fs.stat(archive.paths.list, function(error, stats) {
  //       fs.open(archive.paths.list, "r", function(error, fd) {
  //         var buffer = new Buffer(stats.size);

  //         fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
  //           var data = buffer.toString("utf8", 0, buffer.length);

  //           console.log('Here is your data', data);
  //           fs.close(fd);
  //         });
  //       });
  //     });

  // fs.open(archive.paths.list, 'r', function(err, data){

  //       fs.read(archive.paths.list, function(data){
  //       console.log("newData is:", data);
  //       });
  //       res.writeHead(200, helpers.headers);
  //       res.end(data); 
    
  // });
 res.end(archive.paths.list);
};
