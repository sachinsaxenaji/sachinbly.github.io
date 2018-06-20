var express=require('express');
var app = express();

var port = 4001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);