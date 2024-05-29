const router = require('express').Router();
let Profile = require('../models/profile.model');

router.route('/').get((req, res) => {
  Profile.find()
    .then(profiles => res.json(profiles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const age = Number(req.body.age);
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const goals = req.body.goals;

  const newProfile = new Profile({ username, age, weight, height, goals });

  newProfile.save()
    .then(() => res.json('Profile added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
