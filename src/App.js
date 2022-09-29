import { useEffect, useState } from 'react';
import './App.css';
import Activity from './component/Activity/Activity';
import Games from './component/Games/Games';
import Header from './component/Header/Header';


function App() {
  // useState for load game
  const [games, setGames] = useState([]);
  // useState for set on right side 
  const [times, setTimes] = useState([]);
  // console.log(time);

  // useEffect for load json data 
  useEffect(() => {
    fetch('games.json')
      .then(res => res.json())
      .then(data => setGames(data))
  }, []);

  // handlar decler hear 
  const addToList = (time) => {
    // console.log(exietProduct);
    const newTime = Number(times) + time;
    setTimes(newTime);
    // setTime(totalTime);
  }

  // console.log(game);
  return (
    <div className='main-section'>
      {/* rightside section  */}
      <div className='leftside'>
        <Header></Header>
        <div className='game-container'>
          {
            games.map(game => <Games
              key={game.id}
              game={game}
              addToList={addToList}
            ></Games>)
          }
        </div>
      </div>
      {/* rightside section  */}
      <div className='activity-side'>
        <Activity time={times}></Activity>
      </div>
    </div>
  );
}
export default App;