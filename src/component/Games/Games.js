import React from 'react';
import './Games.css'

const Games = (props) => {
    const { addToList } = props;
    const { img, name, time, details, age } = props.game;
    // console.log(props);
    return (
        <div className='game-body'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{details}</p>
            <p>For Ages: {age}</p>
            <p>Play Time: {time}</p>
            <button onClick={() => addToList(time)} className='btn-class'>
                <p>Add The Game</p>
            </button>
        </div>
    );
};

export default Games;