import React from 'react';
import Workout from '../components/Workout';

const Featured = ({ data }) => {
  return (
    <div className=''>
      <div className='row'>
        {data.map(item => <Workout workout={item} key={item.title} />)}  
      </div>
    </div>
  )
}

export default Featured;
