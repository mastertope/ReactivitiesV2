import React, { useEffect, useState } from 'react';
import './App.css';
import 'axios';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activites').then(response => {
      console.log(response);
      useState(response.data);
    })});

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
