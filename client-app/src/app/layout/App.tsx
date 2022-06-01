import React, { useEffect, useState } from 'react';
import 'axios';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import { Activitiy } from '../models/activities';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activitiy[]>([]);

  useEffect(() => {
    axios.get<Activitiy[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })},[]);

  return (
    <div>
      <NavBar />
      <List>
        {activities.map((activity) => (
        <List.Item key={activity.id}>
            {activity.title}
        </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
