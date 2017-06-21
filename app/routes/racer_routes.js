const _ = require('lodash')

module.exports = function(app, db) {
  var ObjectId = require('mongodb').ObjectID;

  app.post('/api/addTime', (req, res) => {
    const time = {
      racer: req.body.racer,
      time: req.body.time
    };
    db.collection('times').insert(time, (err, result) => {
      if (err) {
        res.send({
          'error': 'An error has occurred'
        });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/api/delete', (req, res) => {
    db.collection('times', function(err, collection) {
      collection.remove({}, function(err, removed) {});
    });
  });

  app.get('/api/races', (req, res) => {
    db.collection('races').find().toArray(function(err, races) {
      if (err) return res.status(500).send("There was a problem finding the races.");
      for (var i = 0; i < races.length; i++) {
        races[i].times = races[i].times.sort(function(a, b) {
          if (a.combined === "" || a.combined === null) return 1;
          if (b.combined === "" || b.combined === null) return -1;
          if (a.combined === b.combined) return 0;
          return a.combined < b.combined ? -1 : 1;
        });
      }
      res.status(200).send(races);
    });
  });

  app.get('/api/race/:Id/', (req, res) => {
    db.collection('races').find({
      "_id": ObjectId(req.params['Id'])
    }).toArray(function(err, races) {
      if (err) return res.status(500).send("There was a problem finding the races.");
      res.status(200).send(races);
    });
  });
};
