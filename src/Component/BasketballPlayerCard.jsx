import React from 'react';
import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
return (
      <div className="player-card">
           <div className='details'>
                    <div className="img-container">
                         <img src={image} alt={`${name}`} className="player-image" />
                    </div>
                    <div className='basic-details'>
                        
                           <p className="player-name">{name}</p>
                           <p className="player-position">{position}</p>
                    </div>

                    <div className="player-stats">
                          <p id='head'>STATS</p>
                          <div className='state'>
                              <p>Points per Game:</p>
                              <p>{stats.pointsPerGame}</p>
                          </div>
                          <div className='state'>
                              <p>Assists per Game:</p>
                              <p>{stats.assistsPerGame}</p>
                          </div>
                          <div className='state'>
                              <p>Rebounds per Game: </p>
                              <p>{stats.reboundsPerGame}</p>
                          </div>
                   </div>
                   
           </div>
     </div>
   );
};
export default BasketballPlayerCard;