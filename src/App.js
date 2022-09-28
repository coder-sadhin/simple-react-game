import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';


function App() {
  const [game, setGame] = useState([])
  useEffect(() => {
    fetch('games.json')
      .then(res => res.json())
      .then(data => setGame(data))
  }, []);
  // console.log(game);
  return (
    <div className='main-section'>
      {/* rightside section  */}
      <div className='leftside'>
        <Header></Header>
      </div>
      {/* leftside section  */}
      <div>
        <h2>belle</h2>
      </div>
    </div>
  );
}

export default App;
