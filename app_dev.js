var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});

var blocks = [{
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
}];

var locations = {'Fixed':'First Floor', 'Movable':'Second Floor', 'Rotating': 'Penthouse'}


app.get('/rundowns', function(request, response){
    response.sendFile(__dirname + '/rundowns/index.html');
});

app.get('/blocks', function(request, response){
    response.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'));

// app.get('/blocks', function(request, response){
//     response.json(Object.keys(blocks));
//     next();
// });


app.post('/blocks', parseUrlencoded, function(request, response){
    var newBlock = request.body;
    blocks[newBlock.name] = newBlock.description;
    response.status(201).json(newBlock.name);
});

app.param('name', function(request, response, next){
   var name = request.params.name;
   var block = name[0].toUpperCase() + name.slice(1).toLowerCase(); 
   request.blockName = block;//makes 'blockname' variable accessible to from other routes within application
   next();
});

app.get('/locations/:name', function(request, response){
    var name = request.params.name;
    //set first character of name to Upper case and the rest of the characters to lowercase
    var block  = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var location = locations[request.blockName];
    if(!location){
        response.status(404).json('No description found for ' + request.params.name);
    }else{
        response.json(location);
    }
    
});


app.get('/blocks/:name', function(request, response){
    var name = request.params.name;
    //set first character of name to Upper case and the rest of the characters to lowercase
    var block  = name[0].toUpperCase() + name.slice(1).toLowerCase();
    //var description = blocks[request.params.name];
    //var description = blocks[block];
    var description = blocks[request.blockName];
    if(!description){
        response.status(404).json('No description found for ' + request.params.name);
    }else{
        response.json(description);
    }
    
});



var logger = require('./logger');
app.use(logger);



// app.get('/blocks', function(request, response){
//     var blocks = ['Fixed', 'Movable', 'Rotating'];
//     if(request.query.limit >=0){
//         response.json(blocks.slice(0, request.query.limit));
//     }else{
//         response.json(blocks);
//     }
    
// });


app.listen(3005);



