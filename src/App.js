import React from 'react';
import './App.css';

import './assets/fonts/OpenSans-Regular.ttf'; 
// import 'assets/fonts/OpenSans-Bold.ttf'; 


import data from './assets/mockData.js';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">   
      <Featured data={data} />
    </div>
  );
}

export default App;


/*
    type: 'series',
    title: 'Performance Series',
    duration: '',
    distance: '',
    photo: 'performance-series-thumb.jpg',
    avatar: 'performance-series-trainer.jpg'
*/