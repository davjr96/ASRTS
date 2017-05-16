module.exports = function(app, db) {
  app.post('/addTime', (req, res) => {
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

  app.get('/delete', (req, res) => {
    db.collection('times', function(err, collection) {
      collection.remove({}, function(err, removed) {});
    });
  });

  app.get('/times', (req, res) => {
    db.collection('times').find().toArray(function(err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
    });
  });
};
