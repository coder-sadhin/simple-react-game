import React from 'react';
import Swal from 'sweetalert2';
import './GameTime.css'

const GameTime = (props) => {
    const { time, brackTime } = props;
    const showAlart = () => {
        Swal.fire(
            'Good job!',
            'You Have Finish The Game!',
            'success'
        )
    }
    // console.log(brackTimeFromStorage);
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
            <button onClick={showAlart} className='game-finish-btn' type="submit">Game Finish</button>
        </div>
    );
};

export default GameTime;