// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var request = require('http-request');
var fs = require('fs');
var archive = rquire('../helpers/archive-helpers');

var cronCheckListOfUrls = function(site){
  fs.readFile(exports.paths.list,'utf8', function(err, data){ 
    if(err){
      error(err);
    } else {
      list=data;
      list=list.split('\n');
      for( var i = 0; i < list.length; i++ ){
        if(!fs.existsSync(__dirname + '/archives/sites/' + site +'.html')){
        htmlFetch(site);
        }
      }

      } 
  });
};

var htmlFetch=function(site){
  //make blank file
  fs.writeFile(__dirname + '/archives/sites/' + site +'.html', "blank", function(err, data){
    if(err){
      console.log(err)
    } else {
      console.log(data)
    }
  })
  //fill it in
  request.get({
    url: site,
    progress: function (current, total) {
      console.log('downloaded %d bytes from %d', current, total);
    }
  }, __dirname + 'd/archives/sites/' + site +'.html', function (err, res) {
    if (err) {
      console.error('error', err);
      return;
    }
    
    console.log(res.code, res.headers, res.file);
  });

};