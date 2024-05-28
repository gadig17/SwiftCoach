const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/swiftcoach', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Profile Schema and Model
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

// Routes
//Create a profile
app.post('/api/profile', async (req, res) => {
  const profile = new Profile(req.body);
  await profile.save();
  res.send(profile);
});

// Get the training plan based on profile ID
app.get('/api/training-plan/:id', async (req, res) => {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send('Profile not found');
    }
    const plan = generateTrainingPlan(profile);
    res.send(plan);
  });
  
  // Generate training plan function
  function generateTrainingPlan(profile) {
    // Basic example: generate a list of workout descriptions
    let plan = [];
    let totalWeeks = 12;
    for (let week = 1; week <= totalWeeks; week++) {
      plan.push(`Week ${week}: Run 3 times, Strength Training 2 times`);
    }
    return plan;
  }
  
  // Start the server
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
