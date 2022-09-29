import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Brack from '../Brack/Brack';
import GameTime from '../GameTime/GameTime';
import './Activity.css'

const Activity = (props) => {
    const { time } = props;
    const brackTimeFromStorage = localStorage.getItem('brackTime');
    const brackTime = (JSON.parse(brackTimeFromStorage));
    // console.log(brackTime);
    const [btnValue, setBtnValue] = useState([brackTime]);

    // setBtnValue();
    //handlar for brack section
    const handleBtnValue = (value) => {
        localStorage.setItem('brackTime', JSON.stringify(value));
        setBtnValue(value)
    }
    // console.log(btnValue)

    return (
        <div className='activity'>
            <Author></Author>
            <Brack
                handleBtnValue={handleBtnValue}
            ></Brack>
            <GameTime
                time={time}
                brackTime={btnValue}
            ></GameTime>
        </div>
    );
};

export default Activity;