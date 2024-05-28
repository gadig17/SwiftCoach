import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProfileSetup from './pages/ProfileSetup';
import TrainingPlan from './pages/TrainingPlan';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile-setup" component={ProfileSetup} />
        <Route path="/training-plan/:id" component={TrainingPlan} />
      </Switch>
    </Router>
  );
}

export default App;
