"use strict";
var fs = require('fs'),
  jade = require('jade'),
  ID = 1;

var configJson = null;
try {
  configJson = JSON.parse(fs.readFileSync('./viewModel_article.json'));
  configJson['article'] = configJson['article'].filter(v => v.id === ID)[0];
  configJson['module'] = 'article';
  configJson.bundleDir = configJson.bundleDir.replace('<ARTICLEID>', ID);
}

catch(err){
  console.error("JSON Error: " + err.message);
}

try {
  let jadePath = `../../../views/article/${configJson.article.id}.jade`;
  var html = jade.renderFile(jadePath, configJson);
  var filePwd = '../../../public/article/1/index.html';
  fs.openSync(filePwd, 'w');
  fs.writeFileSync(filePwd, html);
}
catch(err){
  console.error("Jade Build Error: " + err.message);
}

console.log("render success!");