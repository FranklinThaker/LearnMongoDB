var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  let dbo = db.db("learnyoumongo")
  let parrots = dbo.collection('parrots');
  parrots.find({
    age: {
      $gt: +age
    } 
  },
  {fields:{_id: 0}}
  ).toArray(function(err, docs) {
    if (err) throw err        
        console.log(docs); 
    });
    db.close()
  })
