//  OpenShift sample Node application
var express = require('express'),
    fs      = require('fs'),
    app     = express(),
    bodyParser = require('body-parser'),
    path = require("path");

var app=express();
  app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static(path.join(__dirname,'views')));

app.set('views',path.join( __dirname , 'views'));

app.set('view engine','html');

app.get('/',function(req,res){

  console.log('redering starting');
  res.render('Trainer',{
    pageTilte:'DoxZoo Reports'
  });

});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

//var server=app.listen (8081,function(){
//  var host=server.address().address;
//  var port=server.address().port;
//   console.log("app is listenin");  
//
//});

module.exports = app ;
