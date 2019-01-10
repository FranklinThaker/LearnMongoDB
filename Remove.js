var MongoClient = require('mongodb').MongoClient;
dbName = process.argv[2];
clname = process.argv[3];
id = process.argv[4];
var url = "mongodb://127.0.0.1:27017/" + dbName;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    var myquery = { _id: id };
    dbo.collection(clname).deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });
