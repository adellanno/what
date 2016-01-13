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

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
