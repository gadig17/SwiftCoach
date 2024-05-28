import React, { useState } from 'react';

function ProfileSetup() {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: 'Male',
    weight: '',
    height: '',
    restingHeartRate: '',
    goal: '5K',
    targetDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });
    const data = await response.json();
    console.log(data);
    // Redirect to training plan page or show success message
    history.push(`/training-plan/${data._id}`);
  };

  return (
    <div>
      <h1>Profile Setup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
        <input type="number" name="age" value={profile.age} onChange={handleChange} placeholder="Age" required />
        <select name="gender" value={profile.gender} onChange={handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="number" name="weight" value={profile.weight} onChange={handleChange} placeholder="Weight (kg)" required />
        <input type="number" name="height" value={profile.height} onChange={handleChange} placeholder="Height (cm)" required />
        <input type="number" name="restingHeartRate" value={profile.restingHeartRate} onChange={handleChange} placeholder="Resting Heart Rate" required />
        <select name="goal" value={profile.goal} onChange={handleChange}>
          <option value="5K">5K</option>
          <option value="10K">10K</option>
          <option value="Half Marathon">Half Marathon</option>
          <option value="Marathon">Marathon</option>
          <option value="General Fitness">General Fitness</option>
        </select>
        <input type="date" name="targetDate" value={profile.targetDate} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProfileSetup;
