const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/swiftcoach', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  weight: Number,
  height: Number,
  restingHeartRate: Number,
  goal: String,
  targetDate: Date,
});

const Profile = mongoose.model('Profile', profileSchema);

app.post('/api/profile', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
