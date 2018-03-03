// Require Dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    app = express();

//EJS view engine
app.set('view engine', 'ejs');
//Landing Page
app.get("/", function(req,res){
   res.render("landing"); 
});
//Home page 
app.get("/home", function(req,res){
   res.render("home"); 
});
//Bridge Building Page
app.get("/bridgebuilding", function(req,res){
    res.render("bridgebuilding");
});
//Cupcake decorating Page
app.get("/cupcakedecorating", function(req,res){
    res.render("cupcakedecorating");
});
//Egg Drop Page
app.get("/eggdrop", function(req,res){
    res.render("eggdrop");
});
//Novel Engineering Page
app.get("/novelengineering", function(req,res){
    res.render("novelengineering");
});
//Request a party Page
app.get("/request", function(req,res){
    res.render("request");
});

// Set directory name
app.use(express.static(__dirname + "/public"));

//Listen PORT
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server Running');
});