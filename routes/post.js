var express = require('express');
var body_parser = require('body-parser');
var mongoose = require('mongoose');
var message_model = require('./../models/message.js')

var router = express.Router();
//Mongoose
const mongodb_uri = "mongodb+srv://tiomarello:<password>@cluster0.bylnl.mongodb.net/MessageBoard?retryWrites=true&w=1";
mongoose.connect(mongodb_uri, {useNewUrlParser: true,
    useUnifiedTopology: true});
const mongo_connection = mongoose.connection;
const database = mongo_connection.collection('messages');
const post_messages = ["I hope your message was beautiful <3", "Good job :)", "Thank you !", "Don't give up with words like that :)"]
router.use(body_parser.urlencoded({extended:true}));

router.get('/', function(req,res){
    res.render('post');
  });
  
router.get('/create-message', function(req,res){
    res.render('post')
})
router.post('/submit-message', function(req,res){
    res.render('index', {subheading : post_messages[Math.floor(Math.random()*post_messages.length)]});
    let message = new message_model({identifer: req.body.identifer, message: req.body.message})
    database.insertOne(message);
});

module.exports = router;