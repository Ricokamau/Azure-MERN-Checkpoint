
var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://ricokamau:B482Mm4QRVavP6Yy@cluster0.kdg6xjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Azure");
		dbo.collection("collection1").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log('Mongo data coming in hot')
    		console.log(result);
    		res.json(result)
    		db.close();
    	});
	}); 
});

module.exports = router;