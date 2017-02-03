var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/shows', function(request, response){
    var shows = ['me','atc','watc'];
    response.json(shows);
});

app.listen(3000);