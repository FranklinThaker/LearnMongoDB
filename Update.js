var MongoClient = require('mongodb').MongoClient;
dbName = process.argv[2];
var url = "mongodb://127.0.0.1:27017/" + dbName;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbName);
  var myquery = { username: "tinatime" };
  var newvalues = { $set: {age: 40 } };
  dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    db.close();
  });
});