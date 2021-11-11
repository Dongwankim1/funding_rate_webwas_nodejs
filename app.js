var express = require('express');
var app = express();
var logger = require('morgan');

var mongoose = require('mongoose');
const path = require('path');


app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res,next){
    res.render('index.html');
})

var port = process.env.PORT || 8090;


//var router = require('./routes')(app);

var server = app.listen(port,function(){
    console.log("Express server has started on port"+port);
})