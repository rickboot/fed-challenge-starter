import React from 'react';
import Workout from './Workout';

const FeaturedWorkouts = ({ data }) => {
  return (
      <div className='row'>
        {data.map(item => <Workout workout={item} key={item.title} />)}  
      </div>
  )
}

export default FeaturedWorkouts;
