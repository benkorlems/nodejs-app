var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('Hello, World')
})
app.listen(process.env.PORT || 5050, function(){
  console.log('App listening on port 5050')
})
module.exports = app;
