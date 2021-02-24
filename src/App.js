import React from 'react';
import FeaturedWorkouts from './components/FeaturedWorkouts';
import data from './assets/mockData.js';
import './App.css';
import './assets/fonts/OpenSans-Regular.ttf'; 

function App() {
  return (
    <div className="App">   
      <FeaturedWorkouts data={data} />
    </div>
  );
}

export default App;
