var express = require('express');
var app = express();
var root = __dirname;
var path = require('path');

app.use(express.static(root + '/app/public'));
app.use(express.static(root + '/app/src'));
app.use('/app', express.static(path.join(root, 'app')));


app.get('/', function (req, res) {
  res.sendFile(path.join(root + '/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function () {
var host = server.address().address;
var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});
