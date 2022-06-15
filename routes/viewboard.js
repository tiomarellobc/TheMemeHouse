var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');

router.use(body_parser.urlencoded({urlencoded:true}));



router.get('/', function(req,res){
    res.render('viewboard');
    
    //var cursor = database.find({identifer: "Tio"});
    
    //cursor.count(function(err,num){
      //  console.log(num);
    //});  
})
router.post('/new-post', async function(req,res){
  //res.writeHead(200, {'Content-Type' : 'application/json'});
  const uri = "mongodb+srv://tiomarello:<password>>@cluster0.bylnl.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(async function(err){
    const collection = client.db("MessageBoard").collection("messages");
    const data = collection.aggregate([{$sample:{size:1}}]);
    let document;
    for await (const doc of data){
      document = doc
    }
    console.log(document.identifer);
    res.send({identifer: document.identifer, message: document.message});
    client.close();
});
  
});

module.exports = router;
