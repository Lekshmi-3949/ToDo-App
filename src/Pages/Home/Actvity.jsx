import React, { useState } from 'react';

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [activityInput, setActivityInput] = useState('');

  const handleAddActivity = () => {
    if (activityInput.trim()) {
      setActivities([...activities, activityInput.trim()]);
      setActivityInput('');
    }
  };

  const handleInputChange = (event) => {
    setActivityInput(event.target.value);
  };

  return (
    <div style={{ padding: '20px' , marginTop: '30px'}}>
      <h1>Activity List</h1>
      <input
        type="text"
        value={activityInput}
        onChange={handleInputChange}
        placeholder="Add a new activity"
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddActivity}>Add Activity</button>
      <ul style={{ marginTop: '20px' }}>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPage;
