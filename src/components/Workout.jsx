import React, { useState } from 'react';
import icon_timer from '../assets/images/icn_timer_line.svg';
import icon_distance from '../assets/images/icn_distance_line.svg';
import icon_playlist from '../assets/images/icn_playlist.svg';


const Workout = ({ workout }) => {
  const [isSelected, setIsSelected] = useState(false);
  
  const handleClick = () => {
      setIsSelected(!isSelected);
  }
  
  const { title, type, duration, distance, quantity, photo, avatar } = workout;
  return (
    <div 
      className= {isSelected ? 'box selected' : 'box'}
      onClick={handleClick}
    >
      <div className='box-top'>
        <span className='overlay'>
          <div className='overlay-text'>
            <h1>{quantity}</h1>
            <span>WORKOUTS</span>
            <img className='icon-playlist' src={icon_playlist} alt='playlist icon'></img>

          </div>
        </span>
        <img className='pic' src={`assets/images/${photo}`} alt='{title}' />
      </div>
    
      <div className='box-bottom'>
        <div className='box-bottom-mid'>
          <div className='box-bottom-inner'>
            <div className='box-bottom-left'>

              <h1 className='title'>{title}</h1>
              {type !== 'series' ?
                <div>
                  <img className='icon' src={icon_timer} alt='timer icon'></img>
                  <span id='tiny-text'>{duration}</span>
                  <img className='icon' src={icon_distance} alt='distance icon'></img>
                  <span id='tiny-text'>{distance}</span>
                </div> 
                : null
              }
              {isSelected ? <div className='view-details-link'>VIEW DETAILS</div> : null}

            </div>
            <div className='right'>
              <img className='avatar' src={`assets/images/${avatar}`} alt='instructor avatar' /> 
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Workout;
