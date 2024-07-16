import React from 'react'
import BasketballPlayerCard from './Component/BasketballPlayerCard'

function App() {

   const player=
       {name:"Nikola Jokić",image:"https://b.fssta.com/uploads/application/nba/headshots/1937.vresize.350.350.medium.32.png",position:"Center",stats:{ pointsPerGame: 25.1, assistsPerGame: 8.4,
        reboundsPerGame: 13.0 }}


  return <>
    <div className="container">
       <BasketballPlayerCard
           name={player.name}
           image={player.image}
           position={player.position}
           stats={player.stats}
      />
   </div>
  </>
}

export default App