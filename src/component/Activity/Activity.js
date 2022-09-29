import React, { useState } from 'react';
import Author from '../Author/Author';
import Brack from '../Brack/Brack';
import GameTime from '../GameTime/GameTime';
import './Activity.css'

const Activity = (props) => {
    const { time } = props;
    // console.log(time)
    const [brackTime, setBrackTime] = useState([0]);
    //handlar for brack section
    const [btnValue, setBtnValue] = useState([]);
    const handleBtnValue = (value) => {
        setBtnValue(value)
    }
    console.log(btnValue)

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