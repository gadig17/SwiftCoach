import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to SwiftCoach</h1>
      <p>Your personalized running coach.</p>
      <nav>
        <ul>
          <li><Link to="/profile-setup">Set Up Profile</Link></li>
          <li><Link to="/training-plan">View Training Plan</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
