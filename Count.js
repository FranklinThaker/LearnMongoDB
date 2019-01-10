var mongo = require('mongodb').MongoClient
var condition = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  let dbo = db.db("learnyoumongo")
  let parrots = dbo.collection('parrots');
  
  parrots.count({
    age: {
        $gt: +condition
      } 
  }, function(err, count) {
    console.log(count);
  })   
    db.close()
  })