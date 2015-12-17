// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var request = require('http-request');
var fs = require('fs');


exports.htmlFetch=function(res,site){
  fs.writeFile(__dirname + '../archives/sites/' + site +'.txt', "blank", function(err, data){
    if(err){
      console.log(err)
    } else {
      console.log(data)
    }
  })

  console.log(__dirname);
  request.get({
    url: site,
    progress: function (current, total) {
      console.log('downloaded %d bytes from %d', current, total);
    }
  }, __dirname + '../archives/sites/' + site +'.txt', function (err, res) {
    if (err) {
      console.error('error', err);
      return;
    }
    
    console.log(res.code, res.headers, res.file);
  });

};