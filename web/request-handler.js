var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
var htmlFetch=require('../htmlfetcher');
// require more modules/folders here!

//Get pathname.base and check if base is in  archive.paths.list
//If in list, send file in response.end() and 200 status code
//If not on list, return loading page
  //If server attempts to get page from internet and gets 404
  //Return 404 to user
//Cron job updates already archived pages?

exports.handleRequest = function (req, res) {
  var pathname=path.parse(req.url);

  // archive.readListOfUrls(pathname.base, res);


    // res.end('true: google is on the list');

   // res.end(archive.paths.list);
   htmlFetch.htmlFetch(res, pathname.base);
  };
