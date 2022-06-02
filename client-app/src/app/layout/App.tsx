import React, { useEffect, useState } from 'react';
import 'axios';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/activities';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, []);

  function handleSelectActivity(id: string) {
    setSelectActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id): handleCancelSelectActivity;
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{ marginTop: '7em' }}>
        <List>
          <ActivityDashboard
            activities={activities}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
          />
        </List>
      </Container>
    </>
  );
}

export default App;
