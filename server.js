var express = require('express'); //for save auto
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
require("./router/index.js")(app);

//บอก Port Number
let port = 3000; 
app.listen("3000",function(){
    console.log('Server is running :'+port);
})


