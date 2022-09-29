import React from 'react';
import './GameTime.css'

const GameTime = (props) => {
    const { time, brackTime } = props;
    // console.log(time);
    return (
        <div className='game'>
            <h3>Total Game Time</h3>
            <div className='filed'>
                <div>Play Time: </div>
                <div>{time}</div>
            </div>
            <div className='filed'>
                <div>Brack Time: </div>
                <div>{brackTime}</div>
            </div>
            <button className='game-finish-btn' type="submit">Game Finish</button>
        </div>
    );
};

export default GameTime;