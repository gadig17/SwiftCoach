import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TrainingPlan() {
  const [plan, setPlan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlan = async () => {
      const response = await fetch(`http://localhost:5000/api/training-plan/${id}`);
      const data = await response.json();
      setPlan(data);
    };

    fetchPlan();
  }, [id]);

  return (
    <div>
      <h1>Training Plan</h1>
      <ul>
        {plan.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainingPlan;
