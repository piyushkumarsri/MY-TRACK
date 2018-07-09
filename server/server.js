var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mountApiRoutes = require('./modules/api-routes');

var app  = express();

// cross site scripting
app.use(cors());

// communitate json data receive and parse
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({status:200,msg:"Yes it works"});
});

// mounting api routes

mountApiRoutes(app);


app.listen(3000,()=>{
    console.log('Server is running at 3000');
});