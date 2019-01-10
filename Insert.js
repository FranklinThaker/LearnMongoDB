
fname = process.argv[2];
lname = process.argv[3];

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("learnyoumongo");
  var myobj = { firstName: fname, lastName: lname };
  dbo.collection("doc").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(myobj));
    db.close();
  });
});