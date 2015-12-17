var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var httpHelpers = require('../web/http-helpers');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */


exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(site,res){
  fs.readFile(exports.paths.list,'utf8', function(err, data){ 
    // console.log('response object', res);
    if(err){
      console.log("err!", err);
    } else {
      list=data;  
      isUrlInList(list, site, res)

      } 
  });
};

isUrlInList = function(list, site, res){
  list=list.split('\n');
  for (var i=0; i<list.length; i++){
    if (site===list[i]){
      // isUrlArchived(list, site, res);
    }
  }
  addUrlToList(list, site); 
  res.writeHead(200, httpHelpers.headers);
  res.end("We don't have it!");
};

addUrlToList = function(list, site){
  console.log('intital list', list);
  list=list.join()
  list=list.replace(/,/g, '\n');
  list+='\n'+site;
  fs.writeFile(exports.paths.list, list, function(err){
    if (err){
     return console.log('error');
    }else{
      console.log('file was saved');
    }
  })

};

exports.isUrlArchived = function(){
};

exports.downloadUrls = function(){
};
